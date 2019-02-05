import React, { Component } from 'react';
import './App.css';
import Posts from './posts'
import PostForm from './post_form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostForm />
          <Posts />
        </header>
      </div>
    );
  }
}

export default App;
