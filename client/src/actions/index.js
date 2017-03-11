export const joinPlayer = (gameCode = '') => ({
  type: 'PLAYER_JOIN', gameCode
});

export const joinTable = ({
  type: 'TABLE_JOIN'
});

export const requestNewGame = ({
  type: 'REQUEST_NEW_GAME'
});

export const addCard = (card) => ({
  type: 'ADD_CARD', card
});

export const setGameCode = (gameCode) => ({
  type: 'SET_GAME_CODE', gameCode
});
