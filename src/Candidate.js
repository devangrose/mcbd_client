import React, { Component } from 'react';
import './App.css';
import {Carousel} from 'react-bootstrap';

class Candidate extends Component {
  render() {
    return (
          <div>
        
          <h2> {this.props.user.name} </h2>
          <img height={200} alt="900x500" src={this.props.user.img} /> 
          
          <h4> {this.props.user.affiliation} </h4>
          <p> <a href="{this.props.user.url}">Website</a> </p>
          <p> <a href="{this.props.user.sources}">Sources</a> </p>
          <br></br><br></br>

          {/* <Carousel.Caption>
            <h3>Name: {this.props.name}</h3>
          </Carousel.Caption> */}
          </div>
    );
  }
}

export default Candidate;