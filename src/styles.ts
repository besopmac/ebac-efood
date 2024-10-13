import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  gray: '#a0a0a0',
  cream: '#FFF8F2',
  white: '#ffffff',
  yellow: '#FFB930'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.cream};
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 1024px;
  }
`
