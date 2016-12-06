/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * This is just an example reducer in case you are unsure as to how redux reducers look or are created.
 * If you don't remove the example reducer out of the rootReducer file then when you dispatch
 * the action test you will see the console.info to confirm its working.
 *
 * NOTE: NEVER MUTATE THE STATE - Read more here: http://redux.js.org/docs/introduction/ThreePrinciples.html
 */

export const test = (state, action) => {
    switch ( action.type ) {
      case 'TEST':
        return 'TEST ACTION WORKING';
      default:
        return state || 'NO ACTION RECEIVED';
    }
  }