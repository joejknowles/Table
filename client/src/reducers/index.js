import { combineReducers } from 'redux';
import { playerCount, gameCode, currentPlayer } from './game';
import { cardCount, tablePile } from './cards';
import { notification } from './notifications';

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
  cardCount, tablePile,
  clientType, gameCode, playerCount,
  socketId, currentPlayer,
  notification
});



export const cardCountSelector = (state) => state.cardCount;

export const tablePileSelector = (state) => state.tablePile;

export const tablePileTopCardSelector = (state) => (
  [ ...tablePileSelector(state) ].pop()
);

export const gameCodeSelector = (state) => state.gameCode;

export const playerCountSelector = (state) => state.playerCount;

export const currentPlayerSelector = (state) => state.currentPlayer;

export const socketIdSelector = (state) => state.socketId;

export const notificationSelector = (state) => state.notification;
