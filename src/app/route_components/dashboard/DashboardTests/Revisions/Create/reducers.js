

export const currentGeneratedRevision = (state, action) => {
  switch ( action.type ) {
    case 'CLEAR_CURRENT_GENERATED_REVISION':
      return false;
    case 'SET_CURRENT_GENERATED_REVISION':
      return action.revision;
    case 'MOCK_CURRENT_GENERATED_REVISION':
      return action.revision;
    case 'ADD_QUESTION_TO_CURRENT_GENERATED_REVISION':
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          action.question
        ]
      });
    case 'REMOVE_QUESTION_FROM_CURRENT_GENERATED_REVISION':
      let index = false;
      for(let i=0; i<state.questions.length; i++){
        if(state.questions[i].id === action.uuid){
          index = i;
        }
      }

      if(index !== false){
        return Object.assign({}, state, {
          questions: [
            ...state.questions.slice(0, index),
            ...state.questions.slice(index+1)
          ]
        });
      }
      return state;
    case 'BULK_UPDATE_CURRENT_GENERATED_REVISION_QUESTIONS':
      return {
        ...state,
        questions: action.questions
      };
    default:
      return state || false;
  }
};

export const currentEditedQuestion = (state, action) => {
  switch ( action.type ) {
    case 'SET_CURRENT_EDITED_QUESTION':
      return action.question;
    case 'CLEAR_CURRENT_EDITED_QUESTION':
      return false;
    default:
      return state || false;
  }
}