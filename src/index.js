import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * We need to configure the store based on what environment we are currently in, two
 * configurations have been provided to manager the store depending on the
 * environment, one of the big differences is the inclusion of
 * redux dev tools for the development environment.
 */
import configureStore from './_dev/store/configureStore';

/**
 * When adding new routes, please add them via the routes.js file in the this directory.
 */
import routes from "./routes";

/**
 * We want to create a single redux store from our reducers & also hook up redux thunk for when
 * we want to create asynchronous actions.
 */
const store = configureStore();

/**
 * Pass a history to the router along with the redux store to enable seamless traversal across
 * pages with redux.
 */
const history = syncHistoryWithStore(browserHistory, store);

function run () {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,document.getElementById('root'));
}

run();
store.subscribe(run);