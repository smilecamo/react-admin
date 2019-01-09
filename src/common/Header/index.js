import React, { Component } from 'react'
import {
  Headerwrapper,
  Headertitle,
  HeaderUser
} from './style'
class Header extends Component{
  render(){
    return(
      <React.Fragment>
        <Headerwrapper>
          <Headertitle>
            2019科普微童话后台管理系统
          </Headertitle>
          <HeaderUser>
            欢迎您
          </HeaderUser>
        </Headerwrapper>
      </React.Fragment>
    )
  }
}

export default Header