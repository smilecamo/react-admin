import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import {AuthRoute} from './Au'
import MApp from './App'
import MHome from './page/Home'
import MExportInfo from './page/Export'
import MNotice from './page/Notice'
import MNoticeUser from './page/NoticeUser'
import MNoticeTeam from './page/NoticeTeam'
import MLogin from './page/Login'
class MRouter extends Component{
  render(){
    return(
      <Router>
        <MApp>
          <AuthRoute path="/" exact component={MHome}/>
          <Route path="/login" component={MLogin}/>
          <AuthRoute path="/export" component={MExportInfo}/>
          <AuthRoute path="/notice" component={MNotice}/>
          <AuthRoute path="/noticeuser" component={MNoticeUser}/>
          <AuthRoute path="/noticeteam" component={MNoticeTeam}/>
        </MApp>
      </Router>
    )
  }
}

export default MRouter