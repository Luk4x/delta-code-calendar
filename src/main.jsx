import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme/default';
import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </>
    </React.StrictMode>
);
