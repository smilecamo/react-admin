import styled from 'styled-components'

export const NoticeUserWrapper = styled.div `
  width: 70%;
  height: 500px;
  overflow: hidden;
  overflow: auto;
  box-sizing: border-box;
  line-height:20px;
  margin-top: 120px;
  margin-right: 20px;
  padding: 20px 0;
  float: right;
  color: ${props => props.theme.textcolor};
  border: ${props => props.theme.bordersize}px solid ${props => props.theme.borderbg};
  border-radius: ${props => props.theme.borderRadius}px;
`;

export const NoticeUserBtn = styled.div `
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 20px;
  margin-left: 300px;
  cursor: pointer;
  color: ${props => props.theme.textcolor};
  border: ${props => props.theme.bordersize}px solid ${props => props.theme.borderbg};
  border-radius: ${props => props.theme.borderRadius}px;
`;

export const NoticeTable = styled.table `
  width: 100%;
  height: 36px;
  line-height: 36px;
  table-layout:fixed;
`
export const NoticeTableTr = styled.tr `
`
export const NoticeTbody = styled.tbody `
  text-align: center;
`
export const NoticeThead = styled.thead `
  color: black;
  font-size: 20px;
  background: rgb(255, 240, 245);
`
export const NoticeTh = styled.th `
  
`
export const NoticeTd = styled.td `
  width:100%;
  word-break:keep-all;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
`