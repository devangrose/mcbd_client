import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results.js';

class App extends Component {
  render() {
    return (
      <div className="App Container">
        <h1>PolitiPickr</h1>
        <Results /> 
      </div>
    );
  }
}

export default App;
