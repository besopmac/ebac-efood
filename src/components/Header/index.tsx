import { HeaderWrapper, Title, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export type Props = {
  type: 'home' | 'internal'
}

const Header = ({ type }: Props) => {
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
            <p>0 produto(s) no carrinho</p>
          </div>
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
