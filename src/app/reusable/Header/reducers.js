

export const hashPath = (state, action) => {
  switch ( action.type ) {
    case 'SET_HASH_PATH':
      return action.path;
    case 'CLEAR_HASH_PATH':
      return '';
    default:
      return state || '';
  }
};