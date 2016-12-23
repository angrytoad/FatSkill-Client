

export const loginRequestStatus = (state, action) => {
  switch ( action.type ) {
    case 'LOGIN_REQUEST_FAILED':
      return { success: false, error: action.data };
    case 'LOGIN_REQUEST_SUCCESS':
      return { success: true, error: '' };
    case 'LOGIN_REQUEST_RESET':
      return { success: false, error: '' };
    default:
      return state || { success: false, error: '' };
  }
};