import { styled } from 'styled-components'
import { colors } from '../../styles'

import background from '../../assets/images/fundo.png'

export const HeaderWrapper = styled.header`
  gap: 140px;
  display: flex;
  align-items: center;
  color: ${colors.red};
  padding: 30px 0 40px;
  flex-direction: column;
  background: url(${background}) top left repeat;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const Title = styled.h1`
  font-size: 36px;
  max-width: 540px;
  font-weight: 900;
  text-align: center;
`
