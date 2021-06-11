import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-family: "SF Mono", "Consolas", "Menlo", monospace;
    height: 100%;
  }
  body{
    margin: 0;
    height: 100%;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
