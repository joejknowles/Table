import Component from '../../../components/play/noCards';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('noCards renders as before', () => {
  const component = shallowRenderer.render(<Component />);
  expect(component).toMatchSnapshot();
});
