import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results.js';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App Container">
        <span>PolitiPickr</span>
        <Results /> 
      <List />
            </div>
    );
  }
}

export default App;

        