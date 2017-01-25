import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = ({test}) =>
  ({});

const mapDispatchToProps = dispatch =>
  ({});

const DashboardTests = React.createClass({

  render() {
    return (
      <div id="DashboardTests" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Test Bench</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <li>Test Bench</li>
          </ul>
        </div>
        <div className="test-header">
          <Link to="/dashboard/tests/create">
            <button className="button button-black button-outline">New Test</button>
          </Link>
        </div>
        <p>
          This is the test management page
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTests);