import { JoinGame } from '../../../components/startScreen/joinGame';

import React from 'react';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before', () => {
  const component = shallowRenderer.render(<JoinGame />);
  expect(component).toMatchSnapshot();
});
