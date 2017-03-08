export const joinPlayer = ({
  type: 'PLAYER_JOIN'
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
