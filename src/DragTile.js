import React, { Component } from 'react';

class DragTile extends Component {

  constructor(props){
    super(props);
    this.state ={
      stances: props.item.stances,
    };
  }
  handleClick = (e, index) => {
    this.setState({
      selected: index,
    });
  }

  render() {
    return (
      <div className="drag-tile">
        <p className="inline">{this.props.title}</p>
        {this.state.stances.map((stance, index) =>
          <a className={"inline " + (this.props.item.stance == index ? 'active' : '')} key={index} onClick={(e) =>this.props.handleClick(e,this.props.index,index)}>{stance}</a> 
        )}
      </div>
    )
  }
}

export default DragTile;
