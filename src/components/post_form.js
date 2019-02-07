import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postsAction'

class PostForm extends Component {
  state={
    title:'',
    body:''
  }

  handleChange =(e)=>{
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state);
  }

  onSubmit=(e)=>{
    e.preventDefault();
    const {title, body}=this.state;
    const post ={
      title,
      body
    }

    //add the new post to the jsonplaceholder array
   //call action
   this.props.createPost(post)

  }

  render() {
    const {title, body} = this.state
    const {onSubmit, handleChange} = this;
    return (
      <form onSubmit={onSubmit}>
       <div>
         <input type="text" name="title" onChange={handleChange} value={title}/>
         <br />
         <textarea name="body" onChange={handleChange} value={body}/>
       </div>
       <button type="submit">Add Your Post</button>
      </form>
    );
  }
}

PostForm.propTypes={
  createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost})(PostForm);
