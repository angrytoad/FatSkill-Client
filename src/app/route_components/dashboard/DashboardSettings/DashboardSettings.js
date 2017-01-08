import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = ({test}) =>
  ({});

const mapDispatchToProps = dispatch =>
  ({});

const DashboardSettings = React.createClass({

  render() {
    return (
      <div id="DashboardSettings" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Your Settings</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <li>Account Settings</li>
          </ul>
        </div>
        <p>
          This is the account settings page
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSettings);