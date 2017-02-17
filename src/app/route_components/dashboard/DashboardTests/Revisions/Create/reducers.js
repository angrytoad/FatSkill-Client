

export const currentGeneratedRevision = (state, action) => {
  switch ( action.type ) {
    case 'CLEAR_CURRENT_GENERATED_REVISION':
      return false;
    case 'SET_CURRENT_GENERATED_REVISION':
      return action.revision;
    case 'MOCK_CURRENT_GENERATED_REVISION':
      return action.revision;
    default:
      return state || false;
  }
};