import React from 'react';

import { DispatchButton } from '../common/buttons';

import res from '../../resources/pages/startScreen';
import * as actions from '../../actions'

export const TableJoinButton = () => (
  <DispatchButton
    res={ res.tableJoinButton }
    className="table-join-button"
    action={ actions.joinTable }
  />
);

export const PlayerJoinButton = () => (
  <DispatchButton
    res={ res.playerJoinButton }
    className="player-join-button"
    action={ actions.joinPlayer() }
  />
);
