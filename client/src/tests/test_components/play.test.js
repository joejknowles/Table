import Play from '../../components/play';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before', () => {
  const component = shallowRenderer.render(<Play />);
  expect(component).toMatchSnapshot();
});
