import { ToPathButton } from '../../../components/common/buttons';

import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before', () => {
  const TestButton = ToPathButton({
    path: 'test path', res: 'test res', class: 'test class'
  });
  const component = shallowRenderer.render(<TestButton />);
  expect(component).toMatchSnapshot();
});
