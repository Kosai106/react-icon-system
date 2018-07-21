import React, { Component } from 'react';
import Icon from 'react-icon-system'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon src={'home'} className="App-logo" />
          <h1 className="App-title">Welcome to React-Icon-System</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Icon src={'heart'} className="icon-preview color-green" />
        <Icon src={'inbox'} className="icon-preview color-blue" />
        <Icon src={'monitor'} className="icon-preview color-pink" />
      </div>
    );
  }
}

export default App;
