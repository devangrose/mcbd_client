import React, { Component } from 'react';
import './App.css';
import ControlledCarousel from './Carousel.js';

class Results extends Component {
  render() {
    return (
      <div className="App Container">
        <h3>Results Page</h3>
        <ControlledCarousel />
      </div>
    );
  }
}

export default Results;