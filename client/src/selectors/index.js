import { currentPlayerSelector, socketIdSelector } from '../reducers';

export const myTurnSelector = (state) => {
  const currentPlayer = currentPlayerSelector(state);
  return !!currentPlayer && currentPlayer === socketIdSelector(state);
};
