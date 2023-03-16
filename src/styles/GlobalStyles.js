import { createGlobalStyle } from 'styled-components';

import CircularStdBlackOtf from '../assets/fonts/CircularStd-Black.otf';
import CircularStdBlackItalicOtf from '../assets/fonts/CircularStd-BlackItalic.otf';
import CircularStdBoldOtf from '../assets/fonts/CircularStd-Bold.otf';
import CircularStdBoldItalicOtf from '../assets/fonts/CircularStd-BoldItalic.otf';
import CircularStdBookOtf from '../assets/fonts/CircularStd-Book.otf';
import CircularStdBookItalicOtf from '../assets/fonts/CircularStd-BookItalic.otf';
import CircularStdLightOtf from '../assets/fonts/CircularStd-Light.otf';
import CircularStdLightItalicOtf from '../assets/fonts/CircularStd-LightItalic.otf';
import CircularStdMediumOtf from '../assets/fonts/CircularStd-Medium.otf';
import CircularStdMediumItalicOtf from '../assets/fonts/CircularStd-MediumItalic.otf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBlackOtf}) format('opentype'),
        url(${CircularStdBlackItalicOtf}) format('opentype'),
        url(${CircularStdBoldOtf}) format('opentype'),
        url(${CircularStdBoldItalicOtf}) format('opentype'),
        url(${CircularStdBookOtf}) format('opentype'),
        url(${CircularStdBookItalicOtf}) format('opentype'),
        url(${CircularStdLightOtf}) format('opentype'),
        url(${CircularStdLightItalicOtf}) format('opentype'),
        url(${CircularStdMediumOtf}) format('opentype'),
        url(${CircularStdMediumItalicOtf}) format('opentype');
    }

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
`;
