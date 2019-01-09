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
import Err from './page/404'
import MLogin from './page/Login'
class MRouter extends Component{
  render(){
    return(
      <Router>
        <MApp>
          <AuthRoute path="/" exact component={MHome}/>
          <Route path="/login" admin={true} exact component={MLogin}/>
          <AuthRoute path="/export" exact component={MExportInfo}/>
          <AuthRoute path="/notice" exact component={MNotice}/>
          <AuthRoute path="/noticeuser" exact component={MNoticeUser}/>
          <AuthRoute path="/noticeteam" exact component={MNoticeTeam}/>
          <Route component={Err} />
        </MApp>
      </Router>
    )
  }
}

export default MRouter