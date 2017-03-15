import { Notifications } from '../../components/notifications';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTestUtils from 'react-addons-test-utils';
const shallowRenderer = ReactTestUtils.createRenderer();

it('component renders as before with notifications', () => {
  const component = shallowRenderer.render(
    <Notifications
      notification='test notification'
    />
  );
  expect(component).toMatchSnapshot();
});

it('component renders as before without notifications', () => {
  const component = shallowRenderer.render(
    <Notifications
      notification=''
    />
  );
  expect(component).toMatchSnapshot();
});
