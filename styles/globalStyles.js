import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    line-height: 1.6;
  }
  body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    position: relative;
    color: #67768c;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors?.linkColor}
  }
`;
