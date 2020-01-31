import { RECEIVE_NEW_MESSAGE } from '../constants'

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEW_MESSAGE:
      return state.concat(action.message)
    default:
      return state
  }
}

export default messagesReducer
