import React from 'react';
import { connect } from 'react-redux';

import { DispatchButton } from './common/buttons';
import res from '../resources/pages/waiting';
import { gameCodeSelector } from '../reducers';

export const Waiting = ({ code, players }) => (
  <div className="App">
    <p className="number-of-players">{ res.numOfPlayers(players) }</p>
    <p className="game-code-message" >{ res.enterGameCodeMessage }</p>
    <p className="game-code" >{ code }</p>
    <DispatchButton
      res={ res.begin }
      action={ { type: 'REQUEST_BEGIN_GAME' } }
      className='begin-button'
     />
  </div>
);

const mapStateToProps = (state) => ({
  code: gameCodeSelector(state)
});

export default connect(mapStateToProps)(Waiting);
