import React from 'react';
import { DispatchButton } from '../common/buttons';

export default () => (
  <div className='pile'>
    <DispatchButton
      className='play-card playing-card face-down'
      action={ { type: 'PLAY_CARD' } }
    />
  </div>
);
