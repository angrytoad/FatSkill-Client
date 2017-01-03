import React from 'react';
import {connect} from 'react-redux';

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
        <p>
          This is the account settings page
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSettings);