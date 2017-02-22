import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory } from 'react-router';
import StartScreen from './components/startScreen';
import Play from './components/play';

import paths from './paths'

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ paths.startScreen } component={ StartScreen } />
        <Route path={ paths.play } component={ Play } />
      </Router>
    );
  }
}

export default App;
