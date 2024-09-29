import { FooterWrapper, SocialList, Copyright } from './styles'

import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={logo} alt="eFood" />
      <SocialList>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </SocialList>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer
