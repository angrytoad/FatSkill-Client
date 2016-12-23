


export const nextAuthRoute = (state, action) => {
  switch ( action.type ) {
    case 'SET_NEXT_AUTH_ROUTE':
      return action.route;
    case 'CLEAR_NEXT_AUTH_ROUTE':
      return '';
    default:
      return state || '';
  }
};