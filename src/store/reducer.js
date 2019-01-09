import {
  combineReducers
} from 'redux'
// 各种零碎reducer
import loginReducer from '../page/Login/store/reducer'

// combineReducers 整合零散的reducers
const reducer = combineReducers({
  header: loginReducer
})

export default reducer