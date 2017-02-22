import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App renders as before', () => {
  const app = shallowRenderer.render(<App />);
  expect(app).toMatchSnapshot();
});
