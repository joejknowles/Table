import { Table } from '../../components/table';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before with top card', () => {
  const component = shallowRenderer.render(<Table topCard={ { value: 'card' } } />);
  expect(component).toMatchSnapshot();
});

it('component renders as before without top card', () => {
  const component = shallowRenderer.render(<Table />);
  expect(component).toMatchSnapshot();
});
