import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  line-height:20px;
  margin-top: 120px;
  margin-right: 20px;
  padding: 200px 0;
  float: right;
  color: ${props => props.theme.textcolor};
  border: ${props => props.theme.bordersize}px solid ${props => props.theme.borderbg};
  border-radius: ${props => props.theme.borderRadius}px;
  background: rgba(255, 182, 193,.8);
`;

export const LoginContent = styled.div`
  float: right;
  margin-top: 50px;
  margin-right: 150px;
`;

export const LoginLaber = styled.div`
`
export const LoginInput = styled.input `
  width: 200px;
  height: 36px;
`;
