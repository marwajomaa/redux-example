import React, { Component } from 'react';

class PostForm extends Component {
  state={
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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method:'POST',
      headers:{
      'content-type':'application-json'
     },
     body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=>console.log(data,'heeeeeee'))
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

export default PostForm;
