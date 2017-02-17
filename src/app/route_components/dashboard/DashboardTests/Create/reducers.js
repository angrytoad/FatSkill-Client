

export const currentGeneratedTest = (state, action) => {
  switch ( action.type ) {
    case 'SET_CURRENT_GENERATED_TEST':
      return action.test;
    case 'CLEAR_CURRENT_GENERATED_TEST':
      return false;
    default:
      return state || false;
  }
};