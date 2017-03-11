import React from 'react';
import { connect } from 'react-redux';

import { PlayerJoinButton, TableJoinButton } from './joinButtons';
import { setGameCode } from '../../actions';

export const JoinGame = ({ setGameCode }) => (
  <div  className="join-game">
    <input
      className="enter-game-code"
      onChange={ (input) => setGameCode(input.target.value)}
    />
    <div>
      <PlayerJoinButton />
      <TableJoinButton />
    </div>
  </div>
);

export default connect(
  undefined,
  dispatch => ({ setGameCode: (value) => dispatch(setGameCode(value)) })
)(JoinGame)
