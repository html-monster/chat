import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import MessageItem from './MessageItem'

import styles from './styles'

function MessageList({ classes, messages }) {
  return (
    <div className={classes.messageList}>
      {messages.map(({ author, time, text }) => (
        <MessageItem time={time} author={author} messageText={text} />
      ))}
    </div>
  )
}

export default withStyles(styles)(MessageList)
