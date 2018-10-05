import SERVER_URL from './constants/server_url'
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import DragList from './DragList';
import axios from 'axios';

const positions = [
  {
    weight: 0,
    title: 'Immigration',
    stance: null,
    stances: ['Immigrant Rights','No Comment','Secure Borders'],
    id: 'item-0',
  },
  {
    weight: 1,
    title: 'Gun Control',
    stance: null,
    stances: ['More Regulation','No Comment','Less Regulation'],
    id: 'item-1',
  },
  {
    weight: 2,
    title: 'Economy',
    stance: null,
    stances: ['Regulate','No Comment','Deregulate'],
    id: 'item-3',
  },
  {
    weight: 3,
    title: 'Healthcare',
    stance: null,
    stances: ['Universal Healthcare','No Comment','Privatized'],
    id: 'item-4',
  },
];

const candidates = [
  {
    name: 'Jason Rittereiser',
    affiliation: 'Democrat',
    url: 'https://hkm.com/attorneys/jason-rittereiser/',
    positions: [
      {
        title:'Healthcare',
        stance:0,
      },
      { 
        title:'Economy',
        stance:0
      },
      {
        title: 'Gun Control',
        stance:0
      },
      { 
        title: 'Immigration',
        stance: 1,
      },
    ],
    sources: ['https://ballotpedia.org/Jason_Rittereiser','https://www.seattletimes.com/seattle-news/politics/in-tv-ad-democratic-congressional-candidate-jason-rittereiser-lobs-treason-charge-at-trump/']
  },
  {
    name: 'Dino Rossi',
    affiliation: 'Republican',
    url: 'https://www.dinorossi.com/',
    positions: [
      {
        title: 'Healthcare',
        stance: 0,
      },
      {
        title: 'Economy',
        stance: 2,
      },
      {
        title: 'Gun Control',
        stance: 2,
      },
      {
        title: 'Immigration',
        stance: 2
      }
    ],
    sources:['www.dinorossi.com/issues']
  },
  {
    name: 'Kim Schrier',
    affiliation: 'Democrat',
    url: 'https://splash.drkimschrier.com/?ref=https://www.drkimschrier.com/',
    positions: [
      {
        title: 'Healthcare',
        stance: 0
      },
      {
        title: 'Economy',
        stance: 0
      },
      { 
        title: 'Gun Control',
        stance: 0
      },
      { 
        title: 'Immigration',
        stance: 0
      },
    ],
    sources: ['https://splash.drkimschrier.com/?ref=https://www.drkimschrier.com/','https://votesmart.org/candidate/political-courage-test/181124/kim-schrier/']
  },
]

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      positions: positions,
      redirect: false,
      redirectUrl: ''
    };
  }
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
        var candidate_nums = [];
        for(var i = 0; i < candidates.length; i++){
          console.log('-------------------' + candidates[i].name + '-------------------');
          candidate_nums.push({name:candidates[i].name, value: compare_positions(candidates[i].positions,positions), data: candidates[i]});
        }
        var min, min2 = 0;
        min = candidate_nums[0];
        for(var i = 0; i < candidate_nums.length; i++){
          if (candidate_nums[i].value > min.value){
            min = candidate_nums[i];
          }
        }
        min2 = candidate_nums[1];
        for(var i = 0; i < candidate_nums.length; i++){
          if (candidate_nums[i].value > min2.value && candidate_nums[i].name != min.name){
            min2 = candidate_nums[i];
          }
        }
        var matches = [min.data, min2.data];
        this.setState({

          redirect: true,
          redirectUrl: '/results/' + min.data.name + '/' + min2.data.name,
        })
        console.log(matches);
        
    }
  };
    
  render(){
    if(this.state.redirect){
      return ( <Redirect to={this.state.redirectUrl}/> )
    }
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
  console.log('user info',user);
  console.log('candidate info', candidate);
  /*for(var i = 0; i < user.length; i++){
    var current_pos = user[0];
    var current_index = 0;
    for(var j = 0; j < candidate.length; j++){
      if (candidate[j].title === user[i].title){
        current_index = j;
        current_pos = candidate[j];
      }
    }
    if (i <= current_index){
      var changeScalar = (i - current_index) + 1;
      var choiceScalar;
      if(user[i].stance == 0){
        choiceScalar = 0;
      }
      else {
        choiceScalar = user[i].stance == current_pos.stance ? 1 : -1;
      }
      var orderScalar = candidate.length - 1;

      sum += changeScalar * choiceScalar * orderScalar;
      console.log(changeScalar,choiceScalar,orderScalar);
    }
  }
  */
  for (var i = 0; i < user.length; i++){
    var match = getMatch(candidate, user[i]); 
    var match_index = candidate.indexOf(match);
    var changeScalar = 1 / (Math.abs(i - match_index) + 1);
    var orderScalar = user.length - i;
    var choiceScalar;
    if (user[i].stance - 1 == 0){
      choiceScalar = 0;
    }
    else {
      choiceScalar =( user[i].stance == match.stance ? 1 : -1);
    }
    console.log('Issue:' , match.title);
    console.log('OrderScalar: ' + orderScalar);
    console.log('ChoiceScalar: ' + choiceScalar);
    console.log('ChangeScalar: ' + changeScalar);

    sum += changeScalar * orderScalar * choiceScalar;

    console.log('Sum: ' + sum);
  }
  return sum;
}

function getMatch(arr, position){
  for(var i = 0; i < arr.length; i++){
    if (arr[i].title == position.title){
      return arr[i]
    }
  }
}

export default List;
