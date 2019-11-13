import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0px;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: Nunito;
        overflow-x: hidden;
    }

    h1 {
        margin: 0;
        padding: 0;
        
    }

    
`

export default GlobalStyles
