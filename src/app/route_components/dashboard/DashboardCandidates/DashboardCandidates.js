import React from 'react';
import {connect} from 'react-redux';

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
        <p>
          This is the candidate manager
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCandidates);