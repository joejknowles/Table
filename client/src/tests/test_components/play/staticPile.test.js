import Component from '../../../components/play/staticPile';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('PlayablePile renders as before', () => {
  const component = shallowRenderer.render(<Component />);
  expect(component).toMatchSnapshot();
});
