import React from 'react';
import { connect } from 'react-redux';

import { DispatchButton } from './common/buttons';
import res from '../resources/pages/waiting';

export const Waiting = ({ code, players }) => (
  <div className="App">
    <p className="game-code" >{ code }</p>
    <p className="number-of-players">{ res.numOfPlayers(players) }</p>
    <DispatchButton
      res={ res.begin }
      action={ { type: 'BEGIN_GAME' } }
      className='begin-button'
     />
  </div>
);

export default connect()(Waiting);
