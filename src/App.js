import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import {
  Navwrapper
} from './Appstyle'
import MHeader from './page/Header'
import MNav from './page/Nav'
import MFooter from './page/Footer'
import MHome from './page/Home'
import MExportInfo from './page/Export'
import MNotice from './page/Notice'
import MNoticeUser from './page/NoticeUser'
import MNoticeTeam from './page/NoticeTeam'
import MLogin from './page/Login'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MHeader></MHeader>
        <Navwrapper>
          <MNav></MNav>
          <Route path="/" exact component={MHome} />
          <Route path="/login" exact component={MLogin} />
          <Route path="/export" exact component={MExportInfo} />
          <Route path="/notice" exact component={MNotice} />
          <Route path="/noticeuser" exact component={MNoticeUser} />
          <Route path="/noticeteam" exact component={MNoticeTeam} />
          <Alert stack={{limit: 3}} />
        </Navwrapper>
        <MFooter></MFooter>
      </React.Fragment>
    );
  }
}

export default App;
