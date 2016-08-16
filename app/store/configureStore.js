import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
