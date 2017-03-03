import { combineReducers } from 'redux';

export const hand = (state = 1, action) => (
  action.type === 'PLAY_CARD' ? state - 1 : state
);

export const tablePile = (state = [], action) => (
  action.type === 'ADD_CARD' ? [ ...state, action.card ] : state
);

export const handSelector = (state) => state.hand;

export const tablePileSelector = (state) => state.tablePile;

export default combineReducers({ hand, tablePile });
