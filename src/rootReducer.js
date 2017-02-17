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
 * Fulfillment Reducers
 */
import { fulfillmentData, recentlyCreatedPositions, selectedPosition, addPositionCandidateModal } from './app/route_components/dashboard/DashboardFulfillment/reducers';

/**
 * Candidate Reducers
 */
import { basicCandidateList } from './app/route_components/dashboard/DashboardCandidates/reducers';

/**
 * Test Reducers
 */
import { currentGeneratedTest } from './app/route_components/dashboard/DashboardTests/Create/reducers';
import { currentLoadedTest } from './app/route_components/dashboard/DashboardTests/View/reducers';
import { testsData } from './app/route_components/dashboard/DashboardTests/reducers';

/**
 * Revision Reducers
 */
import { currentGeneratedRevision } from './app/route_components/dashboard/DashboardTests/Revisions/Create/reducers';

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

  /**
   * Fulfillment Reducers
   */
  fulfillmentData,
  recentlyCreatedPositions,
  selectedPosition,
  addPositionCandidateModal,

  /**
   * Candidate Reducers
   */
  basicCandidateList,

  /**
   * Test Reducers
   */
  currentGeneratedTest,
  currentLoadedTest,
  testsData,

  /**
   * Revision Reducers
   */
  currentGeneratedRevision,
};

reducerList.routing =  routerReducer;
const reducers = combineReducers(reducerList);

export default reducers;