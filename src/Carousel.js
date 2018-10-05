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
        {this.props.candidates.map((candidate) => 
        <Carousel.Item> <Candidate user={candidate}/> </Carousel.Item>
        )}
 
      </Carousel>
    );
  }
}

export default ControlledCarousel;


