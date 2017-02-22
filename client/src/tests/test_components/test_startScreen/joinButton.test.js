import JoinButton from '../../../components/startScreen/joinButton';
import paths from '../../../paths';

import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before', () => {
  const component = shallowRenderer.render(<JoinButton />);
  expect(component).toMatchSnapshot();
});

jest.mock('../../../helpers/routing', () => ({
  goToPath: jest.fn()
}));

it('goes to play url on join button click', () => {
  const component = shallow(<JoinButton />);
  component.simulate('click');
  const goToPath = require.requireMock('../../../helpers/routing').goToPath;
  expect(goToPath).toHaveBeenCalledWith(paths.play);
});
