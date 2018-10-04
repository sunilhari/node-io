import React, { Component } from 'react';
import ScoreCard from '../ScoreCard';
import './index.scss';

class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = {
      scores: [{
        name: '192.168.1.0',
        scores: [{
          route: '',
          complete: 'f'
        }]
      },
      {
        name: '192.168.1.0',
        scores: [{
          route: '',
          complete: 'f'
        }]
      }, {
        name: '192.168.1.0',
        scores: [{
          route: '',
          complete: 'f'
        }]
      }, {
        name: '192.168.1.0',
        scores: [{
          route: '',
          complete: 'f'
        }]
      },{
        name: '192.168.1.0',
        scores: [{
          route: '',
          complete: 'f'
        }]
      }]
    };
  }
  render() {
    const scoreCards = this.state.scores.map((score, index) => (
      <ScoreCard {...score} />
    ));
    console.log(scoreCards);
    return (
      <div className=''>
        <div className='card-columns'>
          {scoreCards}
        </div>
      </div>
    )
  }
}

export default ScoreBoard;