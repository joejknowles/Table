import { ToPathButton, DumbDispatchButton } from '../../../components/common/buttons';

import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('ToPathButton renders as before', () => {
  const props = {
    path: 'test path', res: 'test res', class: 'test class'
  };
  const component = shallowRenderer.render(<ToPathButton { ...props } />);
  expect(component).toMatchSnapshot();
});

it('DispatchButton renders as before', () => {
  const props = {
    res: 'test res', className: 'test class'
  };
  const component = shallowRenderer.render(
    <DumbDispatchButton { ...props } />
  );
  expect(component).toMatchSnapshot();
});

it('DispatchButton calls dispatch on click', () => {
  const fn = jest.fn();
  const action = { type: 'test' };
  const component = shallow(
    <DumbDispatchButton dispatch={ fn } />
  );
  expect(fn).not.toHaveBeenCalled();
  component.simulate('click');
  expect(fn).toHaveBeenCalled();
});
