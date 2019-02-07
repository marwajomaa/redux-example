import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../redux/actions/postsAction';

class Posts extends Component {
 componentWillMount(){
   //call action
   this.props.fetchPosts()
 }

 componentWillReceiveProps(nextProps){
   //whenever receive new props fire this method
   if(nextProps.newPost){
     this.props.posts.unshift(nextProps.newPost)
   }
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
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
  //take the posts from rootReduces state and take items from postReducer then assign it to posts key
  //we can access to the posts as props in our component
  posts:state.posts.items,
  newPost:state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);

//summrey
//when call fetchPosts as action creator it's call the fetchPosts action
//when the action is called it's fetching and dispatching the type and payload to the reducer
//reducer return the state with the items has been fetch (which is items)
//in Posts components we have to get the items from the state using mapStateToProps(get the state from redux)
//using the items from state as props then map it in the component
