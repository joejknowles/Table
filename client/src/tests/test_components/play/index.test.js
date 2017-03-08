import { Play } from '../../../components/play';
import PlayCardButton from '../../../components/play/playCardButton';
import Hand from '../../../components/play/hand';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

const ensureConnected = jest.fn();

describe('Play page', () => {
  it('renders as before with cards', () => {
    const component = shallowRenderer.render(
      <Play
        hand={ 1 }
        ensureConnected= { ensureConnected }
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders as before without cards', () => {
    const component = shallowRenderer.render(
      <Play
        hand= { 0 }
        ensureConnected= { ensureConnected }
      />
    );
    expect(component).toMatchSnapshot();
  });
});

it('Hand renders as before', () => {
  const component = shallowRenderer.render(
    <Hand
      ensureConnected= { ensureConnected }
    />
  );
  expect(component).toMatchSnapshot();
});

it('PlayCardButton renders as before', () => {
  const component = shallowRenderer.render(<PlayCardButton />);
  expect(component).toMatchSnapshot();
});
