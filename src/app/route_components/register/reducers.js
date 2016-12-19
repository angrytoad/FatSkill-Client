

export const registrationRequestStatus = (state, action) => {
  switch ( action.type ) {
    case 'REGISTRATION_REQUEST_FAILED':
      return { success: false, error: action.data };
    case 'REGISTRATION_REQUEST_SUCCESS':
      return { success: true, error: '' };
    case 'REGISTRATION_REQUEST_RESET':
      return { success: false, error: '' };
    default:
      return state || { success: false, error: '' };
  }
};