import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { connectedNewUser, updateUsers } from '../actions'

import Anonymous from '../components/anonymous'

class Auth extends Component {
  state = {
    isAuth: false,
  }

  componentDidMount() {
    window.addEventListener('storage', this.updateUsersListener)
    window.addEventListener('beforeunload', this.removeUsersListener)

    this.authProcess()
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.updateUsersListener)
    window.removeEventListener('beforeunload', this.removeUsersListener)
  }

  updateUsersListener = (event) => {
    const sharedUsers = this.getSharedUsers()

    if (
      event.key === 'users' &&
      this.props.users.length !== sharedUsers.length
    ) {
      this.props.updateUsers({
        users: sharedUsers,
      })
    }
  }

  removeUsersListener = () => {
    const sharedUsers = this.getSharedUsers()

    window.localStorage.setItem(
      'users',
      JSON.stringify(
        sharedUsers.filter((userId) => userId !== this.props.currentUserId)
      )
    )
  }

  getNickname = () => window.prompt('Enter your nickname: ') || ''

  getSharedUsers = () => {
    try {
      const users = window.localStorage.getItem('users')

      return JSON.parse(users) || []
    } catch (e) {
      console.error('Auth: Error to parse users', e)
      return []
    }
  }

  authNewUser = (userId, sharedUsers) => {
    const allUsers = [...sharedUsers, userId]

    window.localStorage.setItem('users', JSON.stringify(allUsers))
    this.props.connectedNewUser({ userId })
    this.props.updateUsers({ users: allUsers })
  }

  authProcess = () => {
    const userId = this.getNickname().trim()
    const sharedUsers = this.getSharedUsers()

    if (!userId || !userId.length) {
      return this.setState({ isAuth: false })
    }

    if (sharedUsers.includes(userId)) {
      window.alert('This nickname already exits')

      return this.authProcess(userId)
    }

    this.setState({ userId, isAuth: true })
    this.authNewUser(userId, sharedUsers)
  }

  render() {
    return this.state.isAuth ? this.props.children : <Anonymous />
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users,
  currentUserId: usersReducer.currentUserId,
})

const mapDispatchToProps = (dispatch) => ({
  connectedNewUser: bindActionCreators(connectedNewUser, dispatch),
  updateUsers: bindActionCreators(updateUsers, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
