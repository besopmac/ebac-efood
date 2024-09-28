import { createGlobalStyle } from 'styled-components'

const colors = {
  red: '#E66767',
  white: '#FFF8F2',
  yellow: '#FFB930'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`
