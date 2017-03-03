import React from 'react';
import { DispatchButton } from '../common/buttons';
import res from '../../resources/pages/play';

export default ({ dispatch }) => (
  <DispatchButton
    res={ res.playCard }
    className='play-card btn'
    action={ { type: 'PLAY_CARD' } }
  />
);
