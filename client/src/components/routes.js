import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import StartScreen from './startScreen';
import Play from './play';
import Table from './table';
import paths from '../paths'

export default () => (
  <Router history={ browserHistory }>
    <Route path={ paths.startScreen } component={ StartScreen } />
    <Route path={ paths.play } component={ Play } />
    <Route path={ paths.table } component={ Table } />
  </Router>
);
