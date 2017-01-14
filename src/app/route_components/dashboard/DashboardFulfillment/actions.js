import api_config from '../../../../../config/api.config';
import { browserHistory } from 'react-router';

export const setNextAuthRoute = (nextRoute) => ({ type:'SET_NEXT_AUTH_ROUTE', route:nextRoute });

export const setFulfillmentData = (fulfillmentData) => ({ type:'SET_FULFILLMENT_DATA', data:fulfillmentData });
export const setRecentPositions = (recentPositions) => ({ type:'SET_RECENT_POSITIONS', data:recentPositions });
export const setSelectedPosition = (position) => ({ type:'SET_SELECTED_POSITION', data:position });
export const clearPositionInformation = () => ({ type:'CLEAR_POSITION_INFORMATION' });
export const openAddCandidateModal = () => ({ type: 'SET_ADD_CANDIDATE_MODAL_OPEN' });
export const closeAddCandidateModalOnly = () => ({ type: 'SET_ADD_CANDIDATE_MODAL_CLOSED' });
export const setAddCandidateModalErrors = (errors) => ({ type: 'SET_ADD_CANDIDATE_MODAL_ERRORS', errors });

export const closeAddCandidateModal = () => {
  return dispatch => {
    dispatch(closeAddCandidateModalOnly());
    dispatch(setAddCandidateModalErrors([]));
  }
};

export const fetchPositionInformation = (id) => {
  return dispatch => {
    if(typeof localStorage !== 'undefined') {
      let token = JSON.parse(localStorage.getItem('fs_api_t'));
      fetch(api_config.host + '/api/fulfillment/position/'+id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': (token !== null ? token.value : '')
        },
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
            console.log(json);
            dispatch(setSelectedPosition(json));
          });

        })
        .catch(err => {
          dispatch(setAddCandidateModalErrors([err]));
        });
    }
  }
};

export const addCandidate = (position, candidate_id) => {
  return dispatch => {
    if(typeof localStorage !== 'undefined') {
      let token = JSON.parse(localStorage.getItem('fs_api_t'));
      fetch(api_config.host + '/api/fulfillment/position/'+position+'/link', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': (token !== null ? token.value : '')
        },
        body: JSON.stringify({
          candidate_id
        })
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
            dispatch(fetchPositionInformation(position));
            dispatch(closeAddCandidateModal());
          });

        })
        .catch(err => {
          dispatch(setAddCandidateModalErrors([err]));
        });
    }
  }
};

export const createAndAddCandidate = (position, candidate_email) => {
  return dispatch => {
   if(typeof localStorage !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/fulfillment/position/'+position+'/create-link', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': (token !== null ? token.value : '')
      },
      body: JSON.stringify({
        candidate_email
      })
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
          dispatch(fetchPositionInformation(position));
          dispatch(closeAddCandidateModal());
        });

      })
      .catch(err => {
          console.log(err.message);
      });
    }
  }
};

export const createNewPosition = (data) => {
  return dispatch => {
   if(typeof localStorage !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/fulfillment/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': (token !== null ? token.value : '')
      },
      body: JSON.stringify(data)
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
          browserHistory.push('/dashboard/fulfillment');
        });

      })
      .catch(err => {
          console.log(err.message);
      });
    }
  }
};

export const getRecentPositions = () => {
  return dispatch => {
   if(typeof localStorage !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/fulfillment/recent', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': (token !== null ? token.value : '')
      },
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
          dispatch(setRecentPositions(json));
        });

      })
      .catch(err => {
          console.log(err.message);
      });
    }
  }
};

export const getLatestFulfillment = () => {
  return dispatch => {
   if(typeof localStorage !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/fulfillment/latest', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': (token !== null ? token.value : '')
      },
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
          dispatch(setFulfillmentData(json));
        });

      })
      .catch(err => {
          console.log(err.message);
      });
    }
  }
};