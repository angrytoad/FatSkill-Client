import React from 'react';
import { Route } from 'react-router';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Import Components here that you wish to add to add as routes, please be aware
 * that these component should be dumb and not redux containers, try to
 * break down components into their simplest forms.
 */
import App from './app/application_wrapper/App';

/**
 * Root Components
 */
import Home from './app/route_components/home/Home';
import Login from './app/route_components/login/Login';

/**
 * Example Routes:
 *
 *  <Route path="/" component={Home} />
 *  <Route path="/example" component={Example} />
 *
 */
const routes = (
  <Route name="app" component={App} >
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Route>
);

export default routes;