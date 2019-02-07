import { combineReducers } from 'redux'
import postReducers from './postReducer'

const rootReduces = combineReducers({
  posts: postReducers
})

export default rootReduces;
