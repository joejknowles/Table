export const playerCount = (state = 0, action) =>
  action.type === 'PLAYER_ADDED' ? action.game.playerCount : state;
