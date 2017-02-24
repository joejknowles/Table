const cardsRemaining = (state = 1, action) => (
  action.type === 'PLAY_CARD' ? state - 1 : state
);

export default cardsRemaining;
