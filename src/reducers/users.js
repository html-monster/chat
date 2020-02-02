import { UPDATE_USERS, AUTHORIZE } from '../constants'

const defaultState = {
  currentUserId: null,
  users: [],
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, users: action.users }
    case AUTHORIZE:
      return { ...state, ...action.authData }
    default:
      return state
  }
}

export default usersReducer
