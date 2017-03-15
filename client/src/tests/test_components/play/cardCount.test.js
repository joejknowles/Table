import { CardCount } from '../../../components/play/cardCount';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('CardCount renders as before', () => {
  const component = shallowRenderer.render(<CardCount count={ 5 } />);
  expect(component).toMatchSnapshot();
});


it('CardCount renders as before', () => {
  const component = shallowRenderer.render(<CardCount count={ 0 } />);
  expect(component).toMatchSnapshot();
});
