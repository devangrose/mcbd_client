import React, { Component } from 'react';
import './App.css';
import ControlledCarousel from './Carousel.js';

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
      img: 'https://votesmart.org/canphoto/181122_lg.jpg',
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
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dino_Rossi_Official.jpg/220px-Dino_Rossi_Official.jpg',
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
      img: 'https://pbs.twimg.com/profile_images/1004536749916164096/BlVMXUS7_400x400.jpg',
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
    {
      name: 'Jack Hughes-Hageman',
      affiliation: 'Republican',
      url: 'https://www.hugheshagemanforcongress.org/',
      img: 'https://static.wixstatic.com/media/81f2df_aa78659d896f4021ae353861b0078078~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_512,h_680,al_t,q_80,usm_0.66_1.00_0.01/81f2df_aa78659d896f4021ae353861b0078078~mv2_d_5472_3648_s_4_2.webp',
      positions: [
        {
          title:'Healthcare',
          stance:2
        },
        {
          title:'Economy',
          stance:2
        },
        {
          title: 'Gun Control',
          stance:1
        },
        {
          title: 'Immigration',
          stance: 0
        },
      ],
      sources: ['https://www.hugheshagemanforcongress.org/']
    },
    {
      name: 'Shannon Hader',
      affiliation: 'Democrat',
      url: 'https://www.drshannonforcongress.com',
      img: 'https://sciencespeaksblog.org/wp-content/uploads/2016/03/Hader_S_3142cc5.jpg',
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
          stance: 0,
        },
      ],
      sources: ['http://drshannonforcongress.com/']
    }
  ]

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
