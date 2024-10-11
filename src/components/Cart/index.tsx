import {
  Row,
  Card,
  Action,
  Overlay,
  Sidebar,
  CartItem,
  CardTotal,
  InputGroup,
  CartContainer
} from './styles'
import { Button } from '../Food/styles'

import { close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../utils/formatPrice'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Cart = () => {
  const [showCartStepForm, setShowCartStepForm] = useState('cart')
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setShowCartStepForm('cart')
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
        {showCartStepForm === 'cart' && (
          <>
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
            <Button onClick={() => setShowCartStepForm('delivery')}>
              Continuar com a entrega
            </Button>
          </>
        )}

        {showCartStepForm === 'delivery' && (
          <>
            <form>
              <Card>
                <h3>Entrega</h3>
                <Row>
                  <InputGroup>
                    <label htmlFor="">Quem irá receber</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="">Endereço</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="">Cidade</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup size="50">
                    <label htmlFor="">CEP</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup size="50">
                    <label htmlFor="">Número</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="">Complemento (opcional)</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                </Row>
              </Card>
              <Action>
                <Button onClick={() => setShowCartStepForm('payment')}>
                  Continuar com o pagamento
                </Button>
                <Button onClick={() => setShowCartStepForm('cart')}>
                  Voltar para o carrinho
                </Button>
              </Action>
            </form>
          </>
        )}

        {showCartStepForm === 'payment' && (
          <>
            <form>
              <Card>
                <h3>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                </h3>
                <Row>
                  <InputGroup>
                    <label htmlFor="">Nome no cartão</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="70">Número do cartão</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup size="30">
                    <label htmlFor="">CVV</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup size="50">
                    <label htmlFor="">Mês de vencimento</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                  <InputGroup size="50">
                    <label htmlFor="">Ano de vencimento</label>
                    <input id="" type="text" name="" />
                  </InputGroup>
                </Row>
              </Card>
              <Action>
                <Button>Finalizar pagamento</Button>
                <Button onClick={() => setShowCartStepForm('delivery')}>
                  Voltar para edição de endereço
                </Button>
              </Action>
            </form>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
