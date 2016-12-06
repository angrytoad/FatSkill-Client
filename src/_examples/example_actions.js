/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (29 Jul 2016)
 *
 * This is an example of how a simple synchronous action is carried out as a general rule all actions must be
 * dispatched with a type property so you can identify what needs to happen to the states you are
 * changing. Sometimes if you wish to pass data you may do so by including the data
 * property which should be an object of the data you wish to send.
 */

import api_config from '../../config/api.config';

export const testActionSuccess = data => ({ type: 'TEST' });

export const testAction2 = data => ({ type: 'TEST', data: { foo: data } });

export const testAction3 = (data) => {
  return dispatch => {
    /**
     * Include your async code and dispatch events inside here.
     */
  }
};

export const testAction = () => {
  return dispatch => {
    fetch(api_config.host + '/api/test', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
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
          dispatch(testActionSuccess())
        });

      })
      .catch(err => {
        console.log(err.message);
      });
  }
};