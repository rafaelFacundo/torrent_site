import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background-color: ${({theme}) => theme.background};
    }
`

export default GlobalStyles;