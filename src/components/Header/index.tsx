import { HeaderWrapper, Title, Logo } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="eFood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderWrapper>
  )
}

export default Header
