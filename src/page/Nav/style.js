import styled from 'styled-components'

export const NavWrapper = styled.div`
  margin-top: 120px;
  float:left;
`

export const Navitem = styled.div`
  width: 190px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  padding: 0 5px;
  margin-top: 20px;
  box-sizing: border-box;
  color: ${props => props.theme.textcolor};
  background: ${props=>props.theme.bottombg};
  border: ${props => props.theme.bordersize}px solid ${props => props.theme.borderbg};
  border-radius: ${props => props.theme.borderRadius}px
`