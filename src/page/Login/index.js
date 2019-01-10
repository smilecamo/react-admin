import React, { Component } from 'react';
import Alert from 'react-s-alert';
import Axios from 'axios';
import {redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginContent,
  LoginLaber
} from './style'
import {
  withStyles
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    margin: theme.spacing.unit,
  },
});
class Login extends Component{
  constructor(props){
    super(props)
    this.state ={
      user: '',
      passworld: ''
    }
    this.userChange = this.userChange.bind(this)
    this.changePassworld = this.changePassworld.bind(this)
    this.login = this.login.bind(this)
  }
  render(){
    return(
      <LoginWrapper>
        <LoginContent>
          <LoginLaber>
            <div>
              <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor="component-simple">用户名</InputLabel>
              <Input
                placeholder="请输入用户名"
                className={this.props.classes.input}
                onChange={this.userChange}
              />
              </FormControl>
            </div>
            <div>
              <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor="component-simple">密码</InputLabel>
              <Input
                type="password"
                placeholder="请输入密码"
                className={this.props.classes.input}
                onChange={this.changePassworld}
              />
              </FormControl>
            </div>
              <Button
              variant="contained"
              color="secondary"
              className={this.props.classes.button} style={{width: '100%'}}
              onClick={this.login}
              >登录</Button>
          </LoginLaber>
        </LoginContent>
      </LoginWrapper>
    )
  }
  userChange(e){
    this.setState({
      user: e.target.value
    })
  }
  changePassworld(e) {
    this.setState({
      passworld: e.target.value
    })
  }
  err(){
    Alert.error('用户名或密码错误', {
      position: 'top',
      effect: 'slide',
      timeout: 2000
    })
  }
  sucess(){
    this.props.history.replace("/");
    sessionStorage.setItem('loginIn', true);
    // 刷新页面 暂时解决数据不更新问题
    window.location.reload();
  }
  componentDidMount(){
    const loginIn = sessionStorage.getItem('loginIn');
    console.log(this.props.history);
    // 暂时解决跳转问题
    loginIn ? this.props.history.replace("/") : this.props.history.replace("/login");
    console.log(this.props.history);
  }
  login(){
    if (this.state.user === '' || this.state.passworld === ''){
      Alert.error('请输入用户名或密码', {
        position: 'top',
        effect: 'slide',
        timeout: 2000
      });
    }else{
      Axios({
        methods: 'POST',
        url: '/story/loginAction',
        params:{
          username: this.state.user,
          password: this.state.passworld
        }
      })
        .then((res) => {
          (res.data === '0' || res.data === 0) ? this.err(): this.sucess();
        })
    }
  }
}

export default withStyles(styles)(Login)