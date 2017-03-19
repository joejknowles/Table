import { SwipeablePile } from '../../../components/play/swipeablePile';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('SwipeablePile renders as before', () => {
  const component = shallowRenderer.render(<SwipeablePile cardCount={ 3 } />);
  expect(component).toMatchSnapshot();
});


it('SwipeablePile renders as before with one card', () => {
  const component = shallowRenderer.render(<SwipeablePile cardCount={ 1 } />);
  expect(component).toMatchSnapshot();
});
