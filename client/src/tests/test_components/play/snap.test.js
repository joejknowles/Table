import Snap from '../../../components/play/snap';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('Snap renders as before', () => {
  const component = shallowRenderer.render(<Snap />);
  expect(component).toMatchSnapshot();
});
