import { HeaderWrapper, Title, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  type: 'home' | 'internal'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderWrapper type={type}>
      {type === 'home' ? (
        <>
          <Logo src={logo} alt="eFood" />
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </>
      ) : (
        <>
          <div className="container">
            <h3>Restaurantes</h3>
            <Link to={'/'}>
              <Logo src={logo} alt="eFood" />
            </Link>
            <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
          </div>
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
