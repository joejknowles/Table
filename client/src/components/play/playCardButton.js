import React from 'react';
import { ImageDispatch } from '../common/buttons';

export default () => (
  <ImageDispatch
    className='play-card'
    action={ { type: 'PLAY_CARD' } }
    type='image'
    src="cards/bb.svg"
  />
);
