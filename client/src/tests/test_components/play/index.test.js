import { Play } from '../../../components/play';
import PlayCardButton from '../../../components/play/playCardButton';
import React from 'react';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

const ensureConnected = jest.fn();

describe('Play page', () => {
  it('renders as before', () => {
    const component = shallowRenderer.render(
      <Play
        ensureConnected= { ensureConnected }
      />
    );
    expect(component).toMatchSnapshot();
  });
});

it('PlayCardButton renders as before', () => {
  const component = shallowRenderer.render(<PlayCardButton />);
  expect(component).toMatchSnapshot();
});
