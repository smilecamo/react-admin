import React from 'react';
import {Route,Redirect} from 'react-router-dom'
const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
    render = {
        props => (
          sessionStorage.getItem('loginIn') ?
          (<Component {...props}/>) :
          ( <Redirect to={{pathname: '/login',}}/>)
    )}/>
);
export {AuthRoute}