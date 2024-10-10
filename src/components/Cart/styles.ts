import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../Food/styles'

import trash from '../../assets/images/trash.svg'

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: 7;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`

export const CartContainer = styled.div`
  top: 0;
  left: 0;
  z-index: 7;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  color: ${colors.cream};
  justify-content: flex-end;

  &.visible {
    display: flex;
  }

  ${Button} {
    width: 100%;
    max-width: 100%;
  }
`

export const Sidebar = styled.aside`
  z-index: 7;
  width: 100%;
  max-width: 360px;
  padding: 32px 8px 8px;
  background-color: ${colors.red};
`

export const CartItem = styled.li`
  padding: 8px;
  display: flex;
  font-size: 14px;
  position: relative;
  margin-bottom: 16px;
  color: ${colors.red};
  align-items: flex-start;
  background-color: ${colors.cream};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  button {
    right: 8px;
    bottom: 8px;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    background-color: transparent;
    background-image: url(${trash});
  }
`

export const CardTotal = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  margin: 32px 0 16px;
  justify-content: space-between;
`
