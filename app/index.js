import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from 'config/routes'
import { loadUsers, addAndSaveUser } from './actions/userActions'

const store = configureStore()
store.dispatch(loadUsers())
// store.dispatch(addAndSaveUser())

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
