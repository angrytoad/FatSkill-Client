

export const accountActivationStatus = (state, action) => {
  switch ( action.type ) {
    case 'ACCOUNT_ACTIVATION_REQUEST_FAILED':
      return { success: false, error: action.data };
    case 'ACCOUNT_ACTIVATION_REQUEST_SUCCESS':
      return { success: true, error: '' };
    case 'ACCOUNT_ACTIVATION_REQUEST_RESET':
      return { success: false, error: '' };
    default:
      return state || { success: false, error: '' };
  }
};

export const accountActivationResendStatus = (state, action) => {
  switch ( action.type ) {
    case 'ACCOUNT_ACTIVATION_RESEND_REQUEST_FAILED':
      return { success: false, error: action.data };
    case 'ACCOUNT_ACTIVATION_RESEND_REQUEST_SUCCESS':
      return { success: true, error: '' };
    case 'ACCOUNT_ACTIVATION_RESEND_REQUEST_RESET':
      return { success: false, error: '' };
    default:
      return state || { success: false, error: '' };
  }
};