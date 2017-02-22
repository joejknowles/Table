import React, { Component } from 'react';
import './App.css';
import * as res from '../../resources/pages/startScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="player-join-button">{ res.playerJoinButton }</button>
      </div>
    );
  }
}

export default App;
