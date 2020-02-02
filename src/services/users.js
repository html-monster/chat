export const fetchUsers = () => {
  try {
    const users = window.localStorage.getItem('users')

    return JSON.parse(users) || []
  } catch (e) {
    console.error('Auth: Error to fetch users', e)
    return null
  }
}

export const authUser = (userId) => {
  const users = fetchUsers()

  window.localStorage.setItem('users', JSON.stringify([...users, userId]))
}

export const disconnectUser = (currentUserId) => {
  const users = fetchUsers().filter((userId) => userId !== currentUserId)

  window.localStorage.setItem('users', JSON.stringify(users))
}
