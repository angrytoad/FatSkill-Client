import api_config from '../../../../config/api.config';

import { setLoginToken } from '../login/actions';

export const accountActivationRequestFailed = (error) => ({ type:'ACCOUNT_ACTIVATION_REQUEST_FAILED', data:error });
export const accountActivationRequestSuccess = (error) => ({ type:'ACCOUNT_ACTIVATION_REQUEST_SUCCESS' });
export const accountActivationRequestReset = (error) => ({ type:'ACCOUNT_ACTIVATION_REQUEST_RESET' });

export const requestAccountActivation = (token) => {
  return dispatch => {
    if(typeof localStorage !== 'undefined') {
      fetch(api_config.host + '/api/register/activate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token
        })
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
          dispatch(accountActivationRequestSuccess());
          console.log('SETTING LOGIN TOKEN');
          dispatch(setLoginToken(json.api_token));
        });

      })
      .catch(err => {
        //dispatch(accountActivationRequestSuccess());
        dispatch(accountActivationRequestFailed(err.message));
      });
    }
  }
};

export const accountActivationResendRequestFailed = (error) => ({ type:'ACCOUNT_ACTIVATION_RESEND_REQUEST_FAILED', data:error });
export const accountActivationResendRequestSuccess = (error) => ({ type:'ACCOUNT_ACTIVATION_RESEND_REQUEST_SUCCESS' });
export const accountActivationResendRequestReset = (error) => ({ type:'ACCOUNT_ACTIVATION_RESEND_REQUEST_RESET' });

export const requestAccountActivationResend = (formData) => {
  return dispatch => {
    fetch(api_config.host + '/api/register/activate/resend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email
      })
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
          dispatch(accountActivationResendRequestSuccess());
        });

      })
      .catch(err => {
        dispatch(accountActivationResendRequestFailed(err.message));
      });
  }
};