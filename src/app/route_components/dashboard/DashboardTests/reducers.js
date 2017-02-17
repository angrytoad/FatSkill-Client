


export const testsData = (state, action) => {
  switch ( action.type ) {
    case 'SET_TESTS_DATA':
      return action.tests;
    default:
      return state || [];
  }
};