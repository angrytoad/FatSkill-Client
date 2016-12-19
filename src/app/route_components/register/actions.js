import api_config from '../../../../config/api.config';

export const registrationRequestFailed = (error) => ({ type: 'REGISTRATION_REQUEST_FAILED', data: error });
export const registrationRequestSuccess = () => ({ type: 'REGISTRATION_REQUEST_SUCCESS' });
export const registrationRequestReset = () => ({ type: 'REGISTRATION_REQUEST_RESET' });

export const sendRegistrationRequest = (formData) => {
  return dispatch => {
    fetch(api_config.host + '/api/register', {
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
          dispatch(registrationRequestSuccess());
        });

      })
      .catch(err => {
        dispatch(registrationRequestFailed(err.message));
      });
  }
};