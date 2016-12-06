import { createStore, applyMiddleware, compose } from 'redux';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Thunk allows for asynchronous communication inside your actions and allows the dispatching of
 * multiple events inside one action, this is included by default as Hotsnapper moves
 * towards the use of RESTful services.
 */
import thunkMiddleware from 'redux-thunk';

/**
 * When adding new reducers, please add them into the rootReducers file,
 * as this is only used here as part of the redux createStore()
 * method.
 */
import reducers from "../../rootReducer";

import DevTools from '../DevTools';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../../rootReducer', () =>
      store.replaceReducer(require('../../rootReducer')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}