// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  chat
})

export default rootReducer
