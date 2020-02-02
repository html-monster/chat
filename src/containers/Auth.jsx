import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { disconnectUser } from '../services'

import { startAuthProcess, updateUsers } from '../actions'

import Anonymous from '../components/anonymous'

class Auth extends Component {
  componentDidMount() {
    window.addEventListener('storage', this.updateUsersListener)
    window.addEventListener('beforeunload', this.unloadListener)

    this.props.startAuthProcess()
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.updateUsersListener)
    window.removeEventListener('beforeunload', this.unloadListener)
  }

  updateUsersListener = (event) => {
    if (event.key === 'users') {
      this.props.updateUsers(this.props.users)
    }
  }

  unloadListener = () => {
    disconnectUser(this.props.currentUserId)
  }

  render() {
    return this.props.currentUserId ? this.props.children : <Anonymous />
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users,
  currentUserId: usersReducer.currentUserId,
})

const mapDispatchToProps = (dispatch) => ({
  startAuthProcess: bindActionCreators(startAuthProcess, dispatch),
  updateUsers: bindActionCreators(updateUsers, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
