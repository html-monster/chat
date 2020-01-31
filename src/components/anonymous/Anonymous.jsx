import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './styles'

function Anonymous({ classes }) {
  return (
    <div className={classes.anonymousWrap}>
      <span className={classes.content}>You didn't authorized :C</span>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => window.location.reload()}
      >
        try again?
      </Button>
    </div>
  )
}
export default withStyles(styles)(Anonymous)
