import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Auth from './containers/Auth'
import Chat from './containers/Chat'

import styles from './styles'

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <Container fixed className={classes.App}>
        <Auth>
          <Chat />
        </Auth>
      </Container>
    )
  }
}

export default withStyles(styles)(App)
