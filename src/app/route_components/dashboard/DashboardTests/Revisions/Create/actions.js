import uuidV4 from 'uuid/v4';
import api_config from '../../../../../../../config/api.config';
import { browserHistory } from 'react-router';

export const setNextAuthRoute = (nextRoute) => ({ type:'SET_NEXT_AUTH_ROUTE', route:nextRoute });

/**
 * @method setCurrentGeneratedRevision
 * @reducer currentGeneratedRevision
 * @param revision
 */
export const setCurrentGeneratedRevision = (revision) => ({ type:'SET_CURRENT_GENERATED_REVISION', revision });

/**
 * @method setInitialRevisionData
 * @reducer currentGeneratedRevision
 * @param data
 * @returns {function()}
 */
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

/**
 * @method mockRevision
 * @reducer currentGeneratedRevision
 * @returns {function()}
 */
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

/**
 * @method addQuestionToRevision
 * @reducer currentGeneratedRevision
 * @param question
 */
export const addQuestionToRevision = (question) => ({ type:'ADD_QUESTION_TO_CURRENT_GENERATED_REVISION', question });

/**
 * @method addNewQuestion
 * @reducer currentGeneratedRevision
 * @param type
 * @param formattedType
 * @returns {function()}
 */
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

/**
 * @method removeQuestion
 * @reducer currentGeneratedRevision
 * @param uuid
 */
export const removeQuestion = (uuid) => ({ type:'REMOVE_QUESTION_FROM_CURRENT_GENERATED_REVISION', uuid });

/**
 * @method bulkUpdateQuestions
 * @reducer currentGeneratedRevision
 * @param questions
 */
export const bulkUpdateQuestions = (questions) => ({ type:'BULK_UPDATE_CURRENT_GENERATED_REVISION_QUESTIONS', questions});

/**
 * @method setCurrentEditedQuestion
 * @reducer currentEditedQuestion
 * @param question
 */
export const setCurrentEditedQuestion = (question) => ({ type:'SET_CURRENT_EDITED_QUESTION', question });

/**
 * @method clearCurrentEditedQuestion
 * @reducer currentEditedQuestion
 */
export const clearCurrentEditedQuestion = () => ({ type:'CLEAR_CURRENT_EDITED_QUESTION' });

/**
 * @method saveCurrentRevision
 * @returns {function()}
 */
export const saveCurrentRevision = (revision, test_id) => {
  return dispatch => {
   if(typeof localStorage !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/tests/'+test_id+'/revisions/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': (token !== null ? token.value : '')
      },
      body: JSON.stringify(revision)
    })
      .then(res => {
        let json = res.json();
        if (res.status >= 200 && res.status < 300) {
          return {body: json, token: res.headers.get('Authorization')};
        } else if(res.status === 401) {
          dispatch(setNextAuthRoute(window.location.pathname));
          browserHistory.push('/login');
          return json.then(Promise.reject.bind(Promise));
        }else{
          return json.then(Promise.reject.bind(Promise));
        }
      })
      .then(({body, token}) => {

        body.then(json => {
          browserHistory.push('/dashboard/tests/view/'+test_id);
        });

      })
      .catch(err => {
          console.log(err.message);
      });
    }
  }
};