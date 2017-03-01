import { Play } from '../../components/play';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();


describe('Play page', () => {
  it('renders as before with cards', () => {
    const component = shallowRenderer.render(<Play cardsRemaining={ 1 } />);
    expect(component).toMatchSnapshot();
  });

  it('renders as before without cards', () => {
    const component = shallowRenderer.render(<Play cardsRemaining= { 0 } />);
    expect(component).toMatchSnapshot();
  });
});
