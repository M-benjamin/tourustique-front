import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import Reducer from './reducers'

let reduxCompose = compose;
// > Lauch debug if true
if (__DEV__) {
  reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// > Store configuration for redux
const configureStore = () => {
  return createStore(Reducer, reduxCompose(applyMiddleware(promiseMiddleware)))
}

export default configureStore