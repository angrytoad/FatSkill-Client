

export const fulfillmentData = (state, action) => {
  switch ( action.type ) {
    case 'SET_FULFILLMENT_DATA':
      return action.data;
    default:
      return state || [];
  }
};

export const recentlyCreatedPositions = (state, action) => {
  switch ( action.type ) {
    case 'SET_RECENT_POSITIONS':
      return action.data;
    default:
      return state || [];
  }
};