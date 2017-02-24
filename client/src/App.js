import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './App.css';

import Routes from './components/routes'

class App extends Component {
  render() {
    return (
      <Provider store={ configureStore() } >
        <Routes />
      </Provider>
    );
  }
}

export default App;
