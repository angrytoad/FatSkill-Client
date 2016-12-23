import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Import your reducers below
 */
import { test } from './_examples/example_reducer';

/**
 * Routing Reducers
 */
import { hashPath } from './app/reusable/Header/reducers';
import { nextAuthRoute } from './app/route_components/dashboard/reducers';

/**
 * Registration Reducers
 */
import { registrationRequestStatus } from './app/route_components/register/reducers';
import { accountActivationStatus, accountActivationResendStatus } from './app/route_components/activate/reducers';

/**
 * Login Reducers
 */
import { loginRequestStatus } from './app/route_components/login/reducers'

/**
 * Add to the reducersList any reducers which are needed for the redux application, try to keep reducers separated
 * into their own files and not create one great big reducers file. One option is to create reducers
 * in accordance with their primary function. I.E having a reducer file to handle login ETC.
 *
 */
const reducerList = {
  test,

  /**
   * Routing
   */
  hashPath,
  nextAuthRoute,

  /**
   * Registration Reducers
   */
  registrationRequestStatus,
  accountActivationStatus,
  accountActivationResendStatus,

  /**
   * Login Reducers
   */
  loginRequestStatus,
};

reducerList.routing =  routerReducer;
const reducers = combineReducers(reducerList);

export default reducers;