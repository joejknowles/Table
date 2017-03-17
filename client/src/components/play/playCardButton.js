import React from 'react';
import { ImageDispatch } from '../common/buttons';
import res from '../../resources/pages/play';

export default () => (
  <ImageDispatch
    className='play-card'
    action={ { type: 'PLAY_CARD' } }
    type='image'
    src="cards/bb.svg"
  />
);
