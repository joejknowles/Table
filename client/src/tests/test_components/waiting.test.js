import { Waiting } from '../../components/waiting';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import gameStatus from '../../shared/constants/gameStatus';

const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before with no players', () => {
  const component = shallowRenderer.render(
    <Waiting
      players={ 0 }
      gameCode={ '1234' }
    />
  );
  expect(component).toMatchSnapshot();
});

it('component renders as before with 1 player', () => {
  const component = shallowRenderer.render(
    <Waiting
      players={ 1 }
      gameCode={ '1234' }
    />
  );
  expect(component).toMatchSnapshot();
});

it('component renders as before with 2 players', () => {
  const component = shallowRenderer.render(
    <Waiting
      players={ 2 }
      gameCode={ '1234' }
    />
  );
  expect(component).toMatchSnapshot();
});
