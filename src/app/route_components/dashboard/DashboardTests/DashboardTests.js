import React from 'react';
import {connect} from 'react-redux';

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
        <p>
          This is the test management page
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTests);