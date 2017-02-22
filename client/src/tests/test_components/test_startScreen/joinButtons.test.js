import { PlayerJoinButton, TableJoinButton } from '../../../components/startScreen/joinButtons';

import React from 'react';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('PlayerJoinButton renders as before', () => {
  const component = shallowRenderer.render(<PlayerJoinButton />);
  expect(component).toMatchSnapshot();
});

it('TableJoinButton renders as before', () => {
  const component = shallowRenderer.render(<TableJoinButton />);
  expect(component).toMatchSnapshot();
});
