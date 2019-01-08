import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 70%;
  line-height:20px;
  margin-top: 120px;
  margin-right: 20px;
  padding: 20px 0;
  float: right;
  color: ${props => props.theme.textcolor};
  border: ${props => props.theme.bordersize}px solid ${props => props.theme.borderbg};
  border-radius: ${props => props.theme.borderRadius}px
`