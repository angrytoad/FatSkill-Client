import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({test}) => 
  ({});

const mapDispatchToProps = dispatch =>
  ({});

const DashboardFulfillment = React.createClass({

  render() {
    return (
      <div id="DashboardFulfillment" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Jobs Board</h1>
        </div>
        <p>
          This is the jobs board
        </p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFulfillment);