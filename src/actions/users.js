import { AUTHORIZE, UPDATE_USERS } from '../constants'

import { authUser, fetchUsers } from '../services'

export const updateUsers = (currentUsers) => {
  const users = fetchUsers()

  if (currentUsers.length !== users.length) {
    return {
      type: UPDATE_USERS,
      users,
    }
  }

  return {
    type: UPDATE_USERS,
    currentUsers,
  }
}

const getNickname = () => window.prompt('Enter your nickname: ') || ''

export const startAuthProcess = () => {
  const users = fetchUsers()

  const tryAuthorize = () => {
    const userId = getNickname().trim()

    if (!users || !userId || !userId.length) {
      return {
        type: AUTHORIZE,
        authData: {
          currentUserId: null,
        },
      }
    }

    if (users.includes(userId)) {
      window.alert('This nickname already exits')

      return tryAuthorize()
    }

    authUser(userId)

    return {
      type: AUTHORIZE,
      authData: {
        currentUserId: userId,
        users: [...users, userId],
      },
    }
  }

  return tryAuthorize()
}
