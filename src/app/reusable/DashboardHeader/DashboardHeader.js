import React from 'react';

import { Link } from 'react-router';

import './DashboardHeader.scss';

const DashboardHeader = React.createClass({
  
  render() {
    return (
      <div id="DashboardHeader">
        <ul className="container">
          <Link to="/dashboard" activeClassName="active" onlyActiveOnIndex={true}> 
            <li>
              <i className="material-icons">dashboard</i>
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/fulfillment" activeClassName="active">
            <li>
              <i className="material-icons">work</i>
              Jobs Board
            </li>
          </Link>
          <Link to="/dashboard/candidates" activeClassName="active">
            <li>
              <i className="material-icons">lightbulb_outline</i>
              Candidate Manager
            </li>
          </Link>
          <Link to="/dashboard/tests" activeClassName="active">
            <li>
              <i className="material-icons">extension</i>
              Test Bench
            </li>
          </Link>
          <Link to="/dashboard/settings" activeClassName="active">
            <li>
              <i className="material-icons">settings</i>
              Account Settings
            </li>
          </Link>
        </ul>
      </div>
    )
  }
  
});

export default DashboardHeader;