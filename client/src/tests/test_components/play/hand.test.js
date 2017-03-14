import { Hand } from '../../../components/play/hand';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('Hand renders as before on turn', () => {
  const component = shallowRenderer.render(
    <Hand
      cardCount={ 1 }
      myTurn={ true }
    />
  );
  expect(component).toMatchSnapshot();
});

it('Hand renders as before not on turn', () => {
  const component = shallowRenderer.render(
    <Hand
      cardCount={ 1 }
      myTurn={ false }
    />
  );
  expect(component).toMatchSnapshot();
});

it('Hand renders as before with no cards', () => {
  const component = shallowRenderer.render(
    <Hand
      cardCount={ 0 }
      myTurn={ false }
    />
  );
  expect(component).toMatchSnapshot();
});
