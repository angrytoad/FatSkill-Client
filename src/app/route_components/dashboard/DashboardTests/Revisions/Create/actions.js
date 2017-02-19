import uuidV4 from 'uuid/v4';

export const setCurrentGeneratedRevision = (revision) => ({ type:'SET_CURRENT_GENERATED_REVISION', revision });

export const setInitialRevisionData = (data) => {
  return dispatch => {
    
    let revision = {
      name: data.name,
      description: data.description,
      questions: []
    };
    
    dispatch(setCurrentGeneratedRevision(revision));
  }
};

export const mockRevision = () => {
  return dispatch => {
    let revision = {
      name: "Version 1",
      description: "This is the first version of the revision, and will contain a mix of questions for users to complete",
      questions: []
    };
  
    dispatch(setCurrentGeneratedRevision(revision));
  }
};


export const addQuestionToRevision = (question) => ({ type:'ADD_QUESTION_TO_CURRENT_GENERATED_REVISION', question });

export const addNewQuestion = (type, formattedType) => {
  return dispatch => {
    let question = {
      id: uuidV4(),
      type,
      formattedType: formattedType,
      name: 'New Question',
      description: 'Change me',
      answers:[]
    };
    
    switch(type){
      case 'boolean':
        question.answers.push({ text:'True', weight:100 });
        question.answers.push({ text:'False', weight:0 });
        break;
      default:
        break;
    }
    
    dispatch(addQuestionToRevision(question));
  }
};

export const removeQuestion = (uuid) => ({ type:'REMOVE_QUESTION_FROM_CURRENT_GENERATED_REVISION', uuid });