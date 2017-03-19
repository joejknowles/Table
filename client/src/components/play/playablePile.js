import React from 'react';
import PlayCardButton from './playCardButton';
import SwipeablePile from './swipeablePile';

function is_touch_device() {
  if ( 'callPhantom' in window ) return false; // integration tests fail without this
  return 'ontouchstart' in window ||        // works on most browsers
       navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

export default () => (
    is_touch_device() ?
      <SwipeablePile />
        :
      <PlayCardButton />
);
