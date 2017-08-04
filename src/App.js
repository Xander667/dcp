import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    let task = {};

    return (
      <div className="App">
        <div className="App-header">
          <svg width="400" height="110">
            <rect width="300" height="100" style={{ fill: "Green" }} />
            <rect width="35" height="35" style={{ fill: "Yellow" }} />
            <rect width="100" height="35" x="-40" y="90" style={{ fill: "Red" }} />
          </svg>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Snake V1</h2>
        </div>
        <p className="App-intro">
          <ul>
            <li>Scoreboard</li>
            <li>Gameboard</li>
            <li>snake</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
