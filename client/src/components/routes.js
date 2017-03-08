import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import StartScreen from './startScreen';
import Waiting from './waiting';
import Play from './play';
import Table from './table';
import NotFound from './404';
import paths from '../shared/paths';

export default () => (
  <Router history={ browserHistory }>
    <Route path={ paths.startScreen } component={ StartScreen } />
    <Route path={ paths.play + '(/:gameCode)' } component={ Play } />
    <Route path={ paths.table } component={ Table } />
    <Route path={ paths.waiting } component={ Waiting } />
    <Route path='/*' component={ NotFound } />
  </Router>
);
