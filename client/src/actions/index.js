export const joinPlayer = ({
  type: 'PLAYER_JOIN'
});

export const joinTable = ({
  type: 'TABLE_JOIN'
});

export const newGame = ({
  type: 'NEW_GAME'
});

export const addCard = (card) => ({
  type: 'ADD_CARD', card
});
