import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMessage, setMessage } from '../actions'

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
      this.props.getMessage()
    }
  }

  render() {
    const { users, currentUserId, messages, setMessages } = this.props

    return (
      <Fragment>
        <UsersList users={users} />
        <ChatContainer
          currentUserId={currentUserId}
          messages={messages}
          setMessages={setMessages}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({
  usersReducer: { users, currentUserId } = {},
  messagesReducer,
}) => ({
  users,
  currentUserId,
  messages: messagesReducer,
})

const mapDispatchToProps = (dispatch) => ({
  getMessage: bindActionCreators(getMessage, dispatch),
  setMessages: bindActionCreators(setMessage, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
