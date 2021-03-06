export const playerCount = (state = 0, action) =>
  action.type === 'PLAYER_ADDED' ? action.playerCount || state : state;

export const gameCode = (state = '', action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return action.game.code;
    case 'PLAYER_JOIN':
    case 'SET_GAME_CODE':
      return action.gameCode || state;
    default:
      return state;
  }
};

export const currentPlayer = (state = '', action) => {
  switch (action.type) {
    case 'BEGIN_GAME':
    case 'CARD_PLAYED':
    case 'SNAP_RESULT':
      return action.currentPlayer || state;
    case 'PLAY_CARD':
      return '';
    default:
      return state;
  }
};
