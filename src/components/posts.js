import React, {Component} from 'react'

class Posts extends Component {
  state = {
   posts: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>this.setState({posts}))
  }

  render(){
    const { posts } = this.state;
    console.log(posts);

    return(
      posts.length===0?'loading..'
      :(
      posts.map(post=>
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
      )
    )
    )
  }
}

export default Posts;
