import React, { Component } from 'react';
import './App.css';
import {Carousel} from 'react-bootstrap';

class Candidate extends Component {
  render() {
    return (
          <div>
          <div> Results from your Choices </div>
          {/* this.props.image down below for IMG placeholder */}
          <img height={200} alt="900x500" src="https://pbs.twimg.com/profile_images/1004536749916164096/BlVMXUS7_400x400.jpg" /> 
          <p> % Match placeholder </p>
          <p> Party: {this.props.affiliation} </p>
          <p> Website: {this.props.url} </p>
          <p> Sources: {this.props.sources} </p>

          <Carousel.Caption>
            <h3>Name: {this.props.name}</h3>
          </Carousel.Caption>
          </div>
    );
  }
}

export default Candidate;