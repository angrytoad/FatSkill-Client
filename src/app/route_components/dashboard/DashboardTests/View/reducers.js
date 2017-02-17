
export const currentLoadedTest = (state, action) => {
  switch ( action.type ) {
    case 'SET_CURRENT_LOADED_TEST':
      return action.test;
    case 'CLEAR_CURRENT_LOADED_TEST':
      return false;
    default:
      return state || false;
  }
};