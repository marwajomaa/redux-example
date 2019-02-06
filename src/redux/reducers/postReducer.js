//always reducer take 2 things(state, action)
import { FETCH_POSTS, NEW_POST } from '../actions/types'

//define initailState for default value
const initailState = {
  items:[],
  item:{}
}

const postReducers = (state=initailState, action)=>{
  switch (action.type) {
    default:
     return state

  }

}

export default postReducers;
