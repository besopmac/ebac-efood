import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

import { colors } from '../../styles'

export const Card = styled.div`
  display: grid;
  position: relative;
  color: ${colors.red};
  grid-template-rows: 220px 1fr;
  background-color: ${colors.white};

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const Categories = styled.div`
  top: 16px;
  right: 16px;
  position: absolute;
`

export const CardInfo = styled.div`
  gap: 16px;
  padding: 8px;
  display: flex;
  align-items: start;
  flex-direction: column;
  border: 1px solid ${colors.red};
  border-top-color: transparent;
`

export const CardInfoHeader = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  align-items: center;
  justify-content: end;
`

export const Title = styled.h3`
  margin-right: auto;
`

export const Rating = styled.h4`
  margin-right: 8px;
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
  text-decoration: none;
  color: ${colors.cream};
  background-color: ${colors.red};
`
