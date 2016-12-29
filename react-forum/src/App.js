import React, { Component } from 'react';
import logo from './forum-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My React Sample Forum Post , UI ONLY</h2>
        </div>
        <p className="App-intro">
        Enter your Username and your message, "UI Only sample created in React"
        </p>
      </div>
    );
  }
}

export default App;
