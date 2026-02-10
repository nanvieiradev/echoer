import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box''
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
  }  
`
