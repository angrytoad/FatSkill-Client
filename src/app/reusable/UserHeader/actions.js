import { browserHistory } from 'react-router';


export const logout = () => {
  return dispatch => {
    localStorage.removeItem('fs_api_t');
    browserHistory.push('/');
  }
};