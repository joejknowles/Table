import React from 'react';
import { DispatchButton } from '../common/buttons';
import res from '../../resources/pages/play';

export default ({ dispatch }) => (
  <DispatchButton
    res={ res.snap }
    className='snap'
    action={ { type: 'SNAP' } }
  />
);
