import { Overlay, CartContainer, Sidebar, CartItem, CardTotal } from './styles'
import { Button } from '../Food/styles'

import { close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../utils/formatPrice'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => {
      return (acc += curr.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'visible' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <CardTotal>
          Valor total: <span>{formatPrice(getTotalPrice())}</span>
        </CardTotal>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
