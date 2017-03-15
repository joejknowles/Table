import React from 'react';

import Notifications from './notifications';

export default ({ children }) => (
  <div className="App">
    { children }
    <Notifications />
  </div>
);
