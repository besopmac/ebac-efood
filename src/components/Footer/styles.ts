import { styled } from 'styled-components'
import { colors } from '../../styles'

import background from '../../assets/images/fundo.png'

export const FooterWrapper = styled.footer`
  display: flex;
  padding: 40px 0;
  align-items: center;
  color: ${colors.red};
  flex-direction: column;
  background: url(${background}) top left repeat;
`

export const SocialList = styled.ul`
  gap: 8px;
  padding: 0;
  display: flex;
  margin: 35px 0 0;
`

export const Copyright = styled.p`
  font-size: 10px;
  max-width: 480px;
  text-align: center;
  margin: 80px auto 0;
`
