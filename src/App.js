import React, { Component } from 'react';
import Alert from 'react-s-alert';
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {this.props.children}
        <Alert stack={{limit: 3}} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
