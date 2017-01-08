import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = ({test}) =>
  ({});

const mapDispatchToProps = dispatch =>
  ({});

const DashboardCandidates = React.createClass({

  render() {
    return (
      <div id="DashboardCandidates" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Candidate Manager</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <li>Candidate Manager</li>
          </ul>
        </div>
        <p>
          This is the candidate manager
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCandidates);