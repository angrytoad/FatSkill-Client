


export const basicCandidateList = (state, action) => {
  switch ( action.type ) {
    case 'SET_BASIC_CANDIDATE_LIST':
      return action.candidates;
    default:
      return state || [];
  }
};