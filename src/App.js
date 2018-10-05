import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results.js';
import List from './List';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App Container">
        <h1>PolitiPickr</h1>
        <Router>
          <div>
          <Route exact path="/" component={List}/>
          <Route path='/results/:name/:name2' render={(props) =><Results {...props}/>} />
          </div>
        </Router>
            </div>
    );
  }
}

export default App;
