import React from 'react'
import { Link } from 'react-router-dom';
import {
  NavWrapper,
  Navitem
} from './style'
const Nav = () => {
  return (
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
  )
}

export default Nav