// store take 3 things (rootReduces, initailState, middleware)
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReduces from './reducers'
const initailState = {};
const middleware = [thunk]

export const store = createStore(
  rootReduces,
  initailState,
  applyMiddleware(...middleware)
)
