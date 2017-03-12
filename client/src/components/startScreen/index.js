import React from 'react';

import Layout from '../layout'
import JoinGame from './joinGame';
import NewGame from './newGame';

export default () => (
  <Layout>
    <JoinGame />
    <hr />
    <NewGame />
  </Layout>
);
