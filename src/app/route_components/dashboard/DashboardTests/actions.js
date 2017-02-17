import api_config from '../../../../../config/api.config';
import { browserHistory } from 'react-router';

export const setNextAuthRoute = (nextRoute) => ({ type:'SET_NEXT_AUTH_ROUTE', route:nextRoute });
export const setTestsData = (tests) => ({ type:'SET_TESTS_DATA', tests });
export const clearTestsData = () => ({ type:'CLEAR_TESTS_DATA' });

export const getTestsData = () => {
  return dispatch => {
   if(typeof localStorage !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/tests', {
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
          dispatch(setTestsData(json))
        });

      })
      .catch(err => {
          console.log(err.message);
      });
    }
  }
};