import React from 'react';
import { DispatchButton } from '../common/buttons';
import res from '../../resources/pages/play';
import '../../styles/Play.css';

export const PlayButton = () => (
  <DispatchButton
    res={ res.playCard }
    className={ 'playCard' }
    dispatch={ () => {} }
    action={ { type: 'PLAY_CARD' } }
  />
);

export default () => (
  <div className="App Play">
    <div className="deck">
      <PlayButton />
    </div>
  </div>
);
