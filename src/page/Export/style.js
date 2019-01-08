import styled from 'styled-components'

export const ExportWrapper = styled.div `
  width: 70%;
  line-height:20px;
  margin-top: 120px;
  margin-right: 20px;
  padding: 20px 0;
  float: right;
  color: ${props => props.theme.textcolor};
  border: ${props => props.theme.bordersize}px solid ${props => props.theme.borderbg};
  border-radius: ${props => props.theme.borderRadius}px;
`;

export const ExportBtn = styled.div`
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
  
`