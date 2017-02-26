import 'ignore-styles'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createPage } from '../_prod/utils/server-utils'
import { Provider } from 'react-redux';
import Express from 'express';
import compression from 'compression';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * We need to configure the store
 */
import configureStore from '../../src/_dev/store/configureStore';

/**
 * When adding new routes, please add them via the routes.js file in the this directory.
 */
import routes from "../../src/routes";

/**
 * We want to create a single redux store from our reducers & also hook up redux thunk for when
 * we want to create asynchronous actions.
 */
const store = configureStore();

const app = Express();
let port = 3000;

app.use(Express.static('build'));
app.use(compression());
app.use(createServer);


function createServer(req, res){

  let html = '';

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500)
    } else if (redirectLocation) {
      html = renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>);
    } else if (renderProps) {
      html = renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>);
    } else {
      res.status(404)
    }
  });
  // Grab the initial state from our Redux store
  const initialState = store.getState();

  // Send the rendered page back to the client with our current state
  res.send(createPage(html, initialState))

}

app.listen(port);
console.log(`listening on port ${port}`)