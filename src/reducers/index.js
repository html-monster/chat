import { combineReducers } from 'redux'

import messagesReducer from '../reducers/messages'
import usersReducer from '../reducers/users'

const chatReducer = combineReducers({
  usersReducer,
  messagesReducer,
})

export default chatReducer
