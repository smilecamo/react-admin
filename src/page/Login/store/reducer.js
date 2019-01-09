// 数据管理工具
import {
  fromJS
} from 'immutable'
import {
  LOGIN
} from '../store/actionTypes'
const defaultState = fromJS({
  loginIn: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('loginIn', true);
    default:
      return state;
  }
}