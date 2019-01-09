import React from 'react'
import { Link } from 'react-router-dom';
import MHeader from '../../common/Header'
import MFooter from '../../common/Footer'
import {
  NavWrapper,
  Navitem
} from './style'

class Nav extends React.Component{
  render(){
    return(
      <React.Fragment>
        <MHeader></MHeader>
          <NavWrapper>
            <Link to="/">
              <Navitem>首页</Navitem>
            </Link>
            <Link to='/export'>
              <Navitem>导出参赛者信息及其作品</Navitem>
            </Link>
            <Link to='/notice'>
              <Navitem>通知获奖人</Navitem>
            </Link>
          </NavWrapper>
          {this.props.children}
          <MFooter></MFooter>
        </React.Fragment>
        )
      }
}
export default Nav