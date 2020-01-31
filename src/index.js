import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store'

import App from './App'

render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
