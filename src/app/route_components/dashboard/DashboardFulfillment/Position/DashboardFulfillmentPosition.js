import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { fetchPositionInformation, clearPositionInformation } from '../actions';

const mapStateToProps = ({ selectedPosition }) =>
  ({
    selectedPosition
  });

const mapDispatchToProps = dispatch =>
  ({
    fetchPositionInformation: (id) => dispatch(fetchPositionInformation(id)),
    clearPositionInformation: () => dispatch(clearPositionInformation())
  });

const DashboardFulfillmentPosition = React.createClass({

  componentWillMount() {
    this.props.fetchPositionInformation(this.props.params.position_id);
  },

  componentWillUnmount() {
    this.props.clearPositionInformation();
  },

  render() {
    return (
      <div id="DashboardFulfillmentPosition" className="container dashboard-content">
        {
          this.props.selectedPosition
          ?
            <div>
              <div className="dashboard-header">
                <h1>{this.props.selectedPosition.position}</h1>
              </div>
              <div className="dashboard-breadcrumbs">
                <ul>
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link to="/dashboard/fulfillment">
                    <li>Jobs Board</li>
                  </Link>
                  <li>{this.props.selectedPosition.position}</li>
                </ul>
              </div>
              <div className="dashboard-body">
                This position currently has <strong>{this.props.selectedPosition.candidate_count}</strong> candidates.
              </div>
            </div>
          :
            <div>
              <p>Loading...</p>
            </div>
        }
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFulfillmentPosition);