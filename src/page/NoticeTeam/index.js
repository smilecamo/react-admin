import React, { Component } from 'react';
import MNav from '../Nav'
import Alert from 'react-s-alert';
import Axios from 'axios';
import {
  NoticeUserWrapper,
  NoticeTable,
  NoticeTableTr,
  NoticeTbody,
  NoticeThead,
  NoticeTd,
  NoticeTh
} from './style';

class NoticeUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
    // this.show = this.show.bind(this)
  }
  componentDidMount(){
    Axios.get('/findAllImessages.action')
      .then((res) => {
        this.setState({
          list: res.data
        })
      })
      .catch(() => {
        Alert.error('获取信息失败,请联系管理员', {
          position: 'bottom-left',
          effect: 'slide',
          timeout: 2000
      });
      })
  }
  show(id,tel){
    if(tel === '' || tel === null){
      Alert.error('手机号为空不能发送', {
        position: 'bottom-left',
        effect: 'slide',
        timeout: 2000
      });
    }else{
      Axios({
        method: 'POST',
        url: '/sendMsgNotice1.action',
        params: {
          mobilephones: tel,
          ids: id
        }
      })
        .then((res) => {
          if (res.data === '发送成功'){
            Alert.success('成功发送', {
              position: 'bottom-left',
              effect: 'slide',
              timeout: 2000
            });
          } else{
          Alert.error('未成功,请重新尝试', {
            position: 'bottom-left',
            effect: 'slide',
            timeout: 2000
        });
          }
        })
        .catch(() =>{
          Alert.error('列表获取失败,请重新尝试', {
            position: 'bottom-left',
            effect: 'slide',
            timeout: 2000
        });
        })
    }
  }
  render(){
    return(
      <React.Fragment>
      <MNav></MNav>
      <NoticeUserWrapper>
        <NoticeTable>
          <NoticeThead>
            <NoticeTableTr>
              <NoticeTh>团队名称</NoticeTh>
              <NoticeTh>联系方式</NoticeTh>
              <NoticeTh>来自</NoticeTh>
              <NoticeTh>奖项</NoticeTh>
              <NoticeTh>是否通知</NoticeTh>
              <NoticeTh>通知</NoticeTh>
            </NoticeTableTr>
          </NoticeThead>
          <NoticeTbody>
            {
              this.state.list.map((item) => {
                return(
                  <NoticeTableTr key={item.id}>
                    <NoticeTd>{item.teamname}</NoticeTd>
                    <NoticeTd>{item.mobilephone}</NoticeTd>
                    <NoticeTd>{item.schoolname}</NoticeTd>
                    <NoticeTd>{item.type}</NoticeTd>
                    <NoticeTd>{item.send === 1 ? '是': '否'}</NoticeTd>
                    <NoticeTd
                      style = {{
                        cursor: 'pointer',
                        border: '1px solid #FFB6C1'
                      }}
                      onClick={
                        this.show.bind(this, item.id, item.mobilephone)
                      }
                    >通知</NoticeTd>
                  </NoticeTableTr>
                )
              })
            }
          </NoticeTbody>
        </NoticeTable>
      </NoticeUserWrapper>
      </React.Fragment>
    )
  }
}

export default NoticeUser