import React from 'react';

import { DispatchButton } from '../common/buttons';

import res from '../../resources/pages/startScreen';
import * as actions from '../../actions'

export default () => (
  <div>
    <DispatchButton
      res={ res.newGameButton }
      className="btn new-game"
      action={ actions.requestNewGame }
    />
  </div>
);
