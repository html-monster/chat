import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'

import styles from './styles'

function Users({ classes, name }) {
  return (
    <div className={classes.user}>
      <Avatar variant='rounded' />
      <div className={classes.userInfo}>
        <span className={classes.userName}>{name}</span>
        <span className={classes.userStatus}>Online</span>
      </div>
    </div>
  )
}

export default withStyles(styles)(Users)
