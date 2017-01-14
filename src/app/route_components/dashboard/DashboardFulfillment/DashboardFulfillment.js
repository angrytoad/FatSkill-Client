import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import './DashboardFulfillment.scss';

import { getLatestFulfillment } from './actions';

import FulfillmentDataDisplay from './FulfillmentDataDisplay';

const mapStateToProps = ({ fulfillmentData }) => 
  ({
    fulfillmentData
  });

const mapDispatchToProps = dispatch =>
  ({
    getLatestFulfillment: () => dispatch(getLatestFulfillment())
  });

const DashboardFulfillment = React.createClass({

  componentDidMount() {
    this.props.getLatestFulfillment();
  },

  render() {
    return (
      <div id="DashboardFulfillment" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Jobs Board</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <li>Jobs Board</li>
          </ul>
        </div>
        <div className="fulfillment-header">
          <Link to="/dashboard/fulfillment/create">
            <button className="button button-black button-outline">New Position</button>
          </Link>
        </div>
        <FulfillmentDataDisplay
          fulfillmentData={this.props.fulfillmentData}
        />
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFulfillment);