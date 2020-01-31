import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

function ChatHeader({ classes }) {
  return (
    <div className={classes.chatHeader}>
      <strong>Chat room</strong>
    </div>
  )
}

export default withStyles(styles)(ChatHeader)
