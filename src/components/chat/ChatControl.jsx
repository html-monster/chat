import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './styles'

class ChatControl extends Component {
  state = {
    text: '',
  }

  checkEnterKey = (event) => {
    const code = event.which || event.charCode || event.keyCode
    const ENTER_KEY_CODE = 13

    if (code === ENTER_KEY_CODE) {
      event.preventDefault()
      this.sendMessage()
    }
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  sendMessage = () => {
    const { currentUserId, updateMessages } = this.props
    const { text } = this.state

    if (text) {
      updateMessages({
        author: currentUserId,
        text: text.trim(),
      })

      this.setState({ text: '' })
    }
  }

  render() {
    const { classes } = this.props
    const { text } = this.state

    return (
      <div className={classes.chatControl}>
        <textarea
          className={classes.chatInput}
          placeholder='Type your message'
          rows='7'
          onKeyPress={this.checkEnterKey}
          onChange={this.onChange}
          value={text}
        />
        <Button
          className={classes.submit}
          variant='contained'
          color='secondary'
          onClick={this.sendMessage}
        >
          Send
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ChatControl)
