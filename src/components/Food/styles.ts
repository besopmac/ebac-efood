import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const Card = styled.div`
  gap: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  color: ${colors.cream};
  background-color: ${colors.red};
`

export const Image = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const ButtonLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: auto;
  text-align: center;
  color: ${colors.red};
  text-decoration: none;
  background-color: ${colors.cream};
`
