import React, { PureComponent, createRef } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MessageItem from './MessageItem'

import styles from './styles'

class MessageList extends PureComponent {
  messageListRef = createRef()

  componentDidUpdate() {
    this.messageListRef.current.scrollTop = this.messageListRef.current.scrollHeight
  }

  render() {
    const { classes, messages } = this.props

    return (
      <div className={classes.messageList} ref={this.messageListRef}>
        {messages.map(({ author, time, timestamp, text }) => (
          <MessageItem
            key={timestamp}
            time={time}
            author={author}
            messageText={text}
          />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(MessageList)
