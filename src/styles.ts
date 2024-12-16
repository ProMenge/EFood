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
    width: 100%;
    margin: 0 auto;
  }

  .container2{

    max-width:1476px;
  }
`
