import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MNav from '../Nav'
import {
  NoticeWrapper,
  NoticeBtn
} from './style'
class Notice extends Component{
  render(){
    return(
      <React.Fragment>
        <MNav></MNav>
        <NoticeWrapper>
          <Link to='/noticeuser'>
            <NoticeBtn>通知创作活动获奖者</NoticeBtn>
          </Link>
          <Link to='/noticeteam'>
          <NoticeBtn>
            通知实践活动获奖者
          </NoticeBtn>
          </Link>
        </NoticeWrapper>
      </React.Fragment>
    )
  }
}
export default Notice