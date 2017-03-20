import React from 'react';
import { connect } from 'react-redux';

import Layout from './layout'
import { DispatchButton } from './common/buttons';
import res from '../resources/pages/waiting';
import { gameCodeSelector, playerCountSelector } from '../reducers';

export const Waiting = ({ code, playerCount }) => (
  <Layout>
    <p className="number-of-players">{ res.numOfPlayers(playerCount) }</p>
    <p className="game-code-message" >{ res.enterGameCodeMessage }</p>
    <p className="game-code" >{ code }</p>
    <DispatchButton
      res={ res.begin }
      action={ { type: 'REQUEST_BEGIN_GAME' } }
      className='btn begin-button'
    />
  </Layout>
);

const mapStateToProps = (state) => ({
  code: gameCodeSelector(state),
  playerCount: playerCountSelector(state)
});

export default connect(mapStateToProps)(Waiting);
