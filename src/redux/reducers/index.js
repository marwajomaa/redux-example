import { combineReducers } from 'redux'
import postReducers from './postReducers'

export const rootReduces = combineReducers(
  posts: postReducers
)
