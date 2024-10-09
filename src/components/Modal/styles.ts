import styled from 'styled-components'

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
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
  }
`
