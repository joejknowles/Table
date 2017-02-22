import React from 'react';
import res from '../../resources/pages/startScreen';
import { goToPath } from '../../helpers/routing';
import paths from '../../paths';

export default () => (
  <button
    onClick={ () => goToPath(paths.play) }
    className="player-join-button"
    >
    { res.playerJoinButton }
  </button>
);
