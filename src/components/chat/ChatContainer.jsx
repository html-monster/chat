import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ChatHeader from './ChatHeader'
import MessagesList from './MessagesList'
import ChatControl from './ChatControl'

import styles from './styles'

function ChatContainer({ classes, currentUserId, messages, setMessages }) {
  return (
    <div className={classes.chatContainer}>
      <ChatHeader />
      <MessagesList messages={messages} />
      <ChatControl currentUserId={currentUserId} setMessages={setMessages} />
    </div>
  )
}

export default withStyles(styles)(ChatContainer)
