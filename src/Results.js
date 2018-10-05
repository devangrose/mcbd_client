import React, { Component } from 'react';
import './App.css';
import ControlledCarousel from './Carousel.js';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      candidates : [props.match.params.name, props.match.params.name2]
    };
  }
  render() {
    var candidatesToPass = [];
    for(var i = 0; i < candidates.length; i++){
      if (candidates[i].name == this.state.candidates[0]){
        candidatesToPass.push(candidates[i]);
      }
    }
    for(var j = 0; j < candidates.length; j++){
      if (candidates[j].name == this.state.candidates[1]){
        candidatesToPass.push(candidates[j]);
      }
    }
    console.log('Results ',candidatesToPass);
    console.log('Params: ',this.props.match.params);
    return (
      <div className="App Container">
        <h3>Results Page</h3>
        <ControlledCarousel candidates={candidatesToPass}/>
      </div>
    );
  }
}

export default Results;
