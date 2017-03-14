import { Play } from '../../../components/play';
import PlayCardButton from '../../../components/play/playCardButton';
import Snap from '../../../components/play/snap';
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


it('Snap renders as before', () => {
  const component = shallowRenderer.render(<Snap />);
  expect(component).toMatchSnapshot();
});
