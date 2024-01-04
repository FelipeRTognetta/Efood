import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  offWhiteBG: '#FFF8F2',
  offWhite: '#FFEBD9',
  pink: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.offWhiteBG};
    color: ${colors.pink};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
