import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  border: none;
  font-family: Roboto , 'Segoe UI', Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  background-color: #000;
}
button{
  cursor: pointer;
}
body{
  -webkit-font-smoothing: antialiased;
}
`