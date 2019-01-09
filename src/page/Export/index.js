import React from 'react';
import MNav from '../Nav'
import {
  ExportWrapper,
  ExportBtn
} from './style'
const ExportInfo = () => {
  return (
    <React.Fragment>
      <MNav></MNav>
      <ExportWrapper>
        <a href="https://www.pjxqw-edu.com/story/download.action">
          <ExportBtn>导出个人作品及信息</ExportBtn>
        </a>
        <a href="https://www.pjxqw-edu.com/story/downloads.action?rk=1">
          <ExportBtn>导出家庭作品及信息</ExportBtn>
        </a>
        <a href="https://www.pjxqw-edu.com/story/downloads.action?rk=0">
          <ExportBtn>导出学校作品及信息</ExportBtn>
        </a>
      </ExportWrapper>
  </React.Fragment>
  )
}
export default ExportInfo