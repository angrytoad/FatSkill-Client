import React from 'react';
import { Route, IndexRoute } from 'react-router';

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
import Register from './app/route_components/register/Register';
import AccountActivation from './app/route_components/activate/AccountActivation';

/**
 * Dashboard Components
 */
import Dashboard from './app/route_components/dashboard/Dashboard';
import DashboardMain from './app/route_components/dashboard/DashboardMain/DashboardMain';
import DashboardFulfillment from './app/route_components/dashboard/DashboardFulfillment/DashboardFulfillment';
import DashboardCandidates from './app/route_components/dashboard/DashboardCandidates/DashboardCandidates';
import DashboardTests from './app/route_components/dashboard/DashboardTests/DashboardTests';
import DashboardSettings from './app/route_components/dashboard/DashboardSettings/DashboardSettings';

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
    <Route path="/register" component={Register} />
    <Route path="/activate/:token" component={AccountActivation} />

    <Route name="dashboard" path="/dashboard" component={Dashboard}>
      <IndexRoute component={DashboardMain} />
      <Route path="fulfillment" component={DashboardFulfillment} />
      <Route path="candidates" component={DashboardCandidates} />
      <Route path="tests" component={DashboardTests} />
      <Route path="settings" component={DashboardSettings} />
    </Route>
  </Route>
);

export default routes;