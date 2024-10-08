import { styled } from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

import background from '../../assets/images/fundo.png'

export const HeaderWrapper = styled.header<Props>`
  display: flex;
  align-items: center;
  color: ${colors.red};
  flex-direction: column;
  background: url(${background}) top left repeat;
  gap: ${(props) => (props.type === 'home' ? '140px' : '0')};
  padding: ${(props) =>
    props.type === 'home' ? '30px 0 40px' : '30px 0 60px'};

  > div {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
  }
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
