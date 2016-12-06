import { createStore, applyMiddleware } from 'redux';

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

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunkMiddleware);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(reducers, initialState, enhancer);
};