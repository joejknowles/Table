export const joinPlayer = ({
  type: 'PLAYER_JOIN'
});

export const joinTable = ({
  type: 'TABLE_JOIN'
});

export const addCard = (card) => ({
  type: 'ADD_CARD', card
});
