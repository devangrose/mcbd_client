import SERVER_URL from './constants/server_url'
import React, { Component } from 'react';
import DragList from './DragList';
import axios from 'axios';

const positions = [
  {
    weight: 0,
    title: 'Environment',
    stance: null,
    stances: ['Bad','None','Good'],
    id: 'item-0',
  },
  {
    weight: 1,
    title: 'Public Education',
    stance: null,
    stances: ['Less Funding','No Comment','MORE FUNDING'],
    id: 'item-1',
  },
  {
    weight: 2,
    title: 'Economy',
    stance: null,
    stances: ['Bad','None','Good'],
    id: 'item-2',
  },
];


class List extends Component {
  handleClick = (e, index, stance) => {
    var newpositions = this.state.positions;
    var position = null;
    for(var i = 0; i < positions.length; i++){
      if (positions[i].id == index){
        newpositions[i].stance = stance;
      }
    }
    this.setState({ positions: newpositions});
    console.log(this.state.positions);
    console.log('made it!');
  }
  constructor(props){
    super(props);
    this.state = {
      positions: positions
    };
  }
  canSubmit = () => {
    var to_return = true;
    positions.forEach((position) => {
      console.log(position.stance);
      if (position.stance == null){
        console.log('returning false');
        to_return = false;
      }
    });
    return to_return;
  };

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.canSubmit()) {
      axios.get(SERVER_URL + '/candidates').then((candidates) => {
        var candidate_nums = [];
        for(var i = 0; i < candidates.length; i++){
          candidate_nums.push({name:candidates[i].name, value: compare_positions(candidates[i].positions,positions), data: candidates[i]});
        }
        var min, min2 = 0;
        min = candidate_nums[0];
        for(var i = 0; i < candidate_nums.length; i++){
          if (candidate_nums[i].value < min.value){
            min = candidate_nums[i];
          }
        }
        min2 = candidate_nums[1];
        for(var i = 0; i < candidate_nums.length; i++){
          if (candidate_nums[i].value < min2.value){
            min2 = candidate_nums[i];
          }
        }
        var matches = [min.data, min2.data];
        
      });
    }
  };
    
  render(){
    return (
      <div className="margins-bruh">
        <DragList handleClick={this.handleClick} items={this.state.positions}/>
        <button type="submit" className={this.canSubmit() == true ? '' : 'inactive'} onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

function compare_positions(candidate, user){
  var sum = 0
  for(var i = 0; i < candidate.length; i++){
    var current_pos = user[0];
    var current_index = 0;
    for(var j = 0; j < candidate.length; j++){
      if (candidate[j].title == user[i].title){
        current_index = j;
        current_pos = candidate[j];
      }
    }
    if (i <= current_index){
      var changeScalar = i - current_index;
      var choiceScalar;
      if(user[i].stance == 0){
        choiceScalar = 0;
      }
      else {
        choiceScalar = user[i].stance == current_pos.stance ? 1 : -1;
      }
      var orderScalar = candidate.length - 1;
      sum += changeScalar + choiceScalar + orderScalar;
    }
  }
  return sum;
}

export default List;
