import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateMessages } from '../actions'

import UsersList from '../components/sidebar/UsersList'
import ChatContainer from '../components/chat'

class Chat extends Component {
  componentDidMount() {
    window.addEventListener('storage', this.updateMessagesListener)
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.updateMessagesListener)
  }

  updateMessagesListener = (event) => {
    if (event.key === 'newMessage') {
      const message = this.getMessage()

      message && this.props.updateMessages(message)
    }
  }

  getMessage = () => {
    try {
      return JSON.parse(window.localStorage.getItem('newMessage'))
    } catch (e) {
      console.error('Chat: Error to parse message', e)
      return null
    }
  }

  render() {
    const { users, currentUserId, messages, updateMessages } = this.props

    return (
      <Fragment>
        <UsersList users={users} />
        <ChatContainer
          currentUserId={currentUserId}
          messages={messages}
          updateMessages={updateMessages}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ usersReducer, messagesReducer }) => ({
  users: usersReducer.users,
  currentUserId: usersReducer.currentUserId,
  messages: messagesReducer,
})

const mapDispatchToProps = (dispatch) => ({
  updateMessages: bindActionCreators(updateMessages, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
