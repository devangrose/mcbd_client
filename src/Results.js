import React, { Component } from 'react';
import './App.css';
import ControlledCarousel from './Carousel.js';

class Results extends Component {
  render() {
    return (
      <div className="App Container">
        <h1>Results</h1>
        <ControlledCarousel />
      </div>
    );
  }
}

export default Results;