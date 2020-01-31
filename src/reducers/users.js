import { UPDATE_USERS, CONNECTED_NEW_USER } from '../constants'

const defaultState = {
  currentUserId: null,
  users: [],
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, users: action.users }
    case CONNECTED_NEW_USER:
      return { ...state, currentUserId: action.userId }
    default:
      return state
  }
}

export default usersReducer
