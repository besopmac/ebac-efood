import styled from 'styled-components'
import { colors } from '../../styles'

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    position: absolute;
    background-color: rgba(0, 0, 0, 1);
  }
`

export const ModalContent = styled.div`
  z-index: 5;
  width: 100%;
  display: grid;
  padding: 32px;
  column-gap: 24px;
  max-width: 1024px;
  position: relative;
  background-color: ${colors.red};
  grid-template-columns: 280px 1fr;

  .photo {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .close {
    top: 8px;
    right: 8px;
    cursor: pointer;
    position: absolute;
  }
`

export const ModalInfo = styled.div`
  display: flex;
  align-items: start;
  color: ${colors.white};
  flex-direction: column;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;

    &.porcoes {
      margin-top: 32px;
    }
  }
`
