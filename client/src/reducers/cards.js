export const cardCount = (state = 1, action) => {
  switch (action.type) {
    case 'PLAY_CARD':
      return state - 1;
    case 'SET_CARD_COUNT':
      return action.cardCount;
    default:
      return state;
  }
};

export const tablePile = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [ ...state, action.card ]
    case 'SNAP_RESULT':
      return action.snapped ? [] : state;
    default:
      return state;
  }
};
