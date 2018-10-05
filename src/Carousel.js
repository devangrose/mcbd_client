import React, { Component } from 'react';
import './App.css';
// import Button from 'react-bootstrap/lib/Button';
import {Carousel} from 'react-bootstrap';
import Candidate from './Candidate.js';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
      {/* Going to need a map function to map out candidate Carousel items  */}
        <Candidate />
      </Carousel>
    );
  }
}

export default ControlledCarousel;