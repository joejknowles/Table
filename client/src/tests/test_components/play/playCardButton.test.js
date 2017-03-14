import PlayCardButton from '../../../components/play/playCardButton';
import React from 'react';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('PlayCardButton renders as before', () => {
  const component = shallowRenderer.render(<PlayCardButton />);
  expect(component).toMatchSnapshot();
});
