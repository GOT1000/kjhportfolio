import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import typography from './typography'

export default createGlobalStyle`
  ${reset}

  html {
    overflow-y: auto !important;
  }

  * {
    box-sizing: border-box;
    /* -ms-overflow-style: none; */
  }

  form {
    margin: 0;
  }

  h1 {
    display: block;
    font-size: 2em;
    margin: 0;
    font-weight: bold;
  }

  h2 {
    display: block;
    font-size: 1.5em;
    margin: 0;
    font-weight: bold;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin: 0;
    font-weight: bold;
  }

  h4 {
    display: block;
    font-size: 1em;
    margin: 0;
    font-weight: bold;
  }

  @font-face {
    font-family: "NanumSquare";
    src: url("/static/fonts/NanumSquareR.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "NanumSquareB";
    src: url("/static/fonts/NanumSquareB.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumSquareL";
    src: url("/static/fonts/NanumSquareL.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumGothic";
    src: url("/static/fonts/NanumGothic.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
`
