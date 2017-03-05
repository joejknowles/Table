import React from 'react';

import { DispatchButton } from '../common/buttons';

import res from '../../resources/pages/startScreen';
import * as actions from '../../actions'

export default () => (
  <div>
    <DispatchButton
      res={ res.newGameButton }
      className="new-game"
      action={ actions.newGame }
    />
  </div>
);
