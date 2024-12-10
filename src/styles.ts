import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightYellow: '#FFF8F2',
  lightRed: '#E66767',
  secondaryYellow: '#FFEBD9',
  darkRed: '#8B0000'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${colors.lightYellow};
    color: ${colors.lightRed};

  }

  .container{
    max-width: 1900px;
    width: 100%;
    margin: 0 auto;
  }
`
