import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './style'
import App from './Routers';
const Page = (
    <React.Fragment>
    {/* 全局样式 */}
    <GlobalStyle />
    {/* 全局变量 */}
    <ThemeProvider theme={theme}>
      < App />
    </ThemeProvider>
    </React.Fragment>
)
ReactDOM.render(Page, document.getElementById('root'));
