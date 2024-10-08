import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Container = styled.div<Omit<Props, 'title' | 'subtitle'>>`
  width: 100%;
  height: 280px;
  position: relative;
  background-image: url(${(props) => props.background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BannerWrapper = styled.div`
  z-index: 2;
  height: 100%;
  display: flex;
  margin: 0 auto;
  font-size: 32px;
  max-width: 1024px;
  position: relative;
  padding: 25px 0 32px;
  color: ${colors.white};
  flex-direction: column;
`

export const Subtitle = styled.h4`
  font-weight: 100;
`

export const Title = styled.h3`
  font-weight: 900;
  margin-top: auto;
`
