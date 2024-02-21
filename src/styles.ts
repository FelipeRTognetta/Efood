import styled, { createGlobalStyle } from 'styled-components'

type MarginProps = {
  marginTop?: string
}

export const colors = {
  white: '#fff',
  offWhiteBG: '#FFF8F2',
  offWhite: '#FFEBD9',
  pink: '#E66767',
  gray: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Button = styled.button<MarginProps>`
  font-weight: 700;
  font-size: 14px;
  background-color: ${colors.offWhite};
  color: ${colors.pink};
  padding: 4px;
  border: none;
  width: 100%;
  cursor: pointer;
  margin-top: ${(props) => props.marginTop || '0'};
`
