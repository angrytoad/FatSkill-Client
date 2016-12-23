import api_config from '../../../../config/api.config';
import { browserHistory } from 'react-router';
import { clearNextAuthRoute } from '../dashboard/actions';

export const loginRequestFailed = (error) => ({ type: 'LOGIN_REQUEST_FAILED', data: error });
export const loginRequestSuccess = () => ({ type: 'LOGIN_REQUEST_SUCCESS' });
export const loginRequestReset = () => ({ type: 'LOGIN_REQUEST_RESET' });

export const setReduxLoginToken = (token) => ({ type: 'SET_LOGIN_TOKEN', token });

export const setLoginToken = (token) => {
  return dispatch => {
    dispatch(setReduxLoginToken(token));

    let token_object = {value: token, timestamp: new Date().getTime()};
    localStorage.setItem("fs_api_t", JSON.stringify(token_object));
  }
};

export const sendLoginRequest = (formData, nextRoute) => {
  return dispatch => {
    fetch(api_config.host + '/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        let json = res.json();
        if (res.status >= 200 && res.status < 300) {
          return {body: json, token: res.headers.get('Authorization')};
        } else {
          return json.then(Promise.reject.bind(Promise));
        }
      })
      .then(({body, token}) => {

        body.then(json => {
          dispatch(setLoginToken(json.api_token));
          if(nextRoute.length > 0){
            browserHistory.push(nextRoute);
            dispatch(clearNextAuthRoute());
          }else{
            browserHistory.push('/dashboard');
          }
        })

      })
      .catch(err => {
        dispatch(loginRequestFailed(err.message));
      });
  }
};

export const checkIfAuthenticated = () => {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    fetch(api_config.host + '/api/test', {
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
        }else{
          return json.then(Promise.reject.bind(Promise));
        }
      })
      .then(({body, token}) => {

        body.then(json => {
          browserHistory.push('/dashboard');
        });

      })
      .catch(err => {
          console.log(err.message);
      });
  }
};