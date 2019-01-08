import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GlobalStyle, theme } from './style'
import App from './App';
const Page = (
    <React.Fragment>
    {/* 全局样式 */}
    <GlobalStyle />
    {/* 全局变量 */}
    <ThemeProvider theme={theme}>
    {/* 路由 */}
      <Router>
        <Switch>
            <App />
        </Switch>
      </Router>
    </ThemeProvider>
    </React.Fragment>
)
ReactDOM.render(Page, document.getElementById('root'));
