import { combineReducers } from 'redux';

export const hand = (state = 1, action) => (
  action.type === 'PLAY_CARD' ? state - 1 : state
);

export const tablePile = (state = [], action) => (
  action.type === 'ADD_CARD' ? [ ...state, action.card ] : state
);

export const gameCode = (state = '', action) => (
  action.type === 'NEW_GAME' ? action.game.code : state
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

export default combineReducers({
  hand, tablePile, clientType, gameCode
});

export const handSelector = (state) => state.hand;

export const tablePileSelector = (state) => state.tablePile;

export const tablePileTopCardSelector = (state) => (
  [ ...tablePileSelector(state) ].pop()
);
