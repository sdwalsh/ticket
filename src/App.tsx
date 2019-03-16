import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Prize Wheel
          </p>
          <label>Start</label>
          <input type='number'></input>
          <label>Ed</label>
          <input type='number'></input>
        </header>
      </div>
    );
  }
}

export default App;
