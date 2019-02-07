import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import fetchPosts from '../redux/actions/postsAction';

class Posts extends Component {
 componentWillMount(){
   this.props.fetchPosts()
 }
  render(){
    const { posts } = this.props;
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


Posts.propTypes={
  fetchPosts: PropTypes.fun.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
  //take the posts from rootReduces state and take items from postReducer then assign it to posts key
  //we can access to the posts as props in our component
  posts:state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
