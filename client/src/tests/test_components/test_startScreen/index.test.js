import StartScreen from '../../../components/startScreen';

import React from 'react';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before', () => {
  const component = shallowRenderer.render(<StartScreen />);
  expect(component).toMatchSnapshot();
});
