import { combineReducers } from 'redux';
import { playerCount, gameCode, currentPlayer } from './game';

export const hand = (state = 1, action) => (
  action.type === 'PLAY_CARD' ? state - 1 : state
);

export const tablePile = (state = [], action) => (
  action.type === 'ADD_CARD' ? [ ...state, action.card ] : state
);

export const clientType = (state = '', action) => {
  switch (action.type) {
    case 'PLAYER_JOIN':
      return 'PLAYER';
    case 'TABLE_JOIN':
      return 'TABLE';
    default:
      return state;
  }
};

export const socketId = (state = '', action) => (
  action.type === 'SET_SOCKET_ID' ? action.id : state
);

export default combineReducers({
  hand, tablePile, clientType, gameCode, playerCount, socketId, currentPlayer
});



export const handSelector = (state) => state.hand;

export const tablePileSelector = (state) => state.tablePile;

export const tablePileTopCardSelector = (state) => (
  [ ...tablePileSelector(state) ].pop()
);

export const gameCodeSelector = (state) => state.gameCode;

export const playerCountSelector = (state) => state.playerCount;
