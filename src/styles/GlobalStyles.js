import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root, * {
        font-family: 'Circular Std', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 450;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }

    body {
        background: ${props => props.theme.colorSchema.backgroundBase};
    }
`;
