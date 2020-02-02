import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import User from './User'

import styles from './styles'

function UsersList({ classes, users }) {
  return (
    <div className={classes.usersList}>
      {users.map((nickname) => (
        <User key={nickname} name={nickname} />
      ))}
    </div>
  )
}
export default withStyles(styles)(UsersList)
