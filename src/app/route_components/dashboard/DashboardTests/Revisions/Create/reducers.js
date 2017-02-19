

export const currentGeneratedRevision = (state, action) => {
  switch ( action.type ) {
    case 'CLEAR_CURRENT_GENERATED_REVISION':
      return false;
    case 'SET_CURRENT_GENERATED_REVISION':
      return action.revision;
    case 'MOCK_CURRENT_GENERATED_REVISION':
      return action.revision;
    case 'ADD_QUESTION_TO_CURRENT_GENERATED_REVISION':
      return {
        ...state,
        questions: [
          ...state.questions,
          action.question
        ]
      };
    case 'REMOVE_QUESTION_FROM_CURRENT_GENERATED_REVISION':
      let index = false;
      for(let i=0; i<state.questions.length; i++){
        if(state.questions[i].id === action.uuid){
          index = i;
        }
      }

      if(index !== false){
        return {
          ...state,
          questions: [
            ...state.questions.slice(0, index),
            ...state.questions.slice(index+1)
          ]
        }
      }
      return state;

    default:
      return state || false;
  }
};