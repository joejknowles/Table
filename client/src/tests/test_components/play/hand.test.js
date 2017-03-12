import { Hand } from '../../../components/play/hand';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('Hand renders as before on turn', () => {
  const component = shallowRenderer.render(
    <Hand
      myTurn={ true }
    />
  );
  expect(component).toMatchSnapshot();
});

it('Hand renders as before not on turn', () => {
  const component = shallowRenderer.render(
    <Hand
      myTurn={ false }
    />
  );
  expect(component).toMatchSnapshot();
});
