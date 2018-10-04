import React, { Component } from 'react';
import io from 'socket.io-client';

import ScoreBoard from '../ScoreBoard';
import Navbar from '../Navbar';
class App extends Component {
  componentDidMount() {
    this.socket = io('http://localhost', {
      path: '/myownpath'
    });
  }
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
