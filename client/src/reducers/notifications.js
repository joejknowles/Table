export const notification = (state = '', action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.message;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};
