import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

function MessageList({ classes, time, author, messageText }) {
  return (
    <div className={classes.messageItem}>
      <div className={classes.messageInfo}>
        <span className={classes.messageTime}>{time}</span>
        <span>{author}</span>
      </div>
      <div className={classes.messageContainer}>
        <span className={classes.messageText}>{messageText}</span>
      </div>
    </div>
  )
}

export default withStyles(styles)(MessageList)
