import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      htmp_url: 'https://github.com/thomasmartinez114'
    }
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <UserItem />
      </div>
    );
  }
}

export default App;
