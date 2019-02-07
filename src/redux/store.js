// store take 3 things (rootReduces, initailState, middleware)
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReduces from './reducers'
const initailState = {};
const middleware = [thunk]

export const store = createStore(
  rootReduces,
  initailState,
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)
