import { FETCH_POSTS, NEW_POST } from './types'

const fetchPosts = ()=> dispatch =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(posts=>
    dispatch({
    type: FETCH_POSTS,
    payload: posts
  }))
}

export default fetchPosts
