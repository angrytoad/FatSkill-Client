import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import DashboardFulfillmentPositionCandidates from './DashboardFulfillmentPositionCandidates';
import DashboardFulfillmentPositionHeader from './DashboardFulfillmentPositionHeader';
import AddCandidateModal from './Modals/AddCandidateModal';

import './DashboardFulfillmentPosition.scss';

import { fetchPositionInformation, clearPositionInformation, openAddCandidateModal, closeAddCandidateModal } from '../actions';

const mapStateToProps = ({ selectedPosition, addPositionCandidateModal }) =>
  ({
    selectedPosition,
    addPositionCandidateModal
  });

const mapDispatchToProps = dispatch =>
  ({
    fetchPositionInformation: (id) => dispatch(fetchPositionInformation(id)),
    clearPositionInformation: () => dispatch(clearPositionInformation()),
    openAddCandidateModal: () => dispatch(openAddCandidateModal()),
    closeAddCandidateModal: () => dispatch(closeAddCandidateModal())
  });

const DashboardFulfillmentPosition = React.createClass({

  componentWillMount() {
    this.props.fetchPositionInformation(this.props.params.position_id);
  },

  componentWillUnmount() {
    this.props.clearPositionInformation();
  },

  onOpenAddCandidateModal() {
    this.props.openAddCandidateModal();
  },

  onCloseAddCandidateModal() {
    this.props.closeAddCandidateModal();
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
                <div className="row">
                  <DashboardFulfillmentPositionHeader
                    position={this.props.selectedPosition}
                    openAddCandidateModal={this.onOpenAddCandidateModal}
                  />
                </div>
                <div className="row">
                  <DashboardFulfillmentPositionCandidates
                    candidates={this.props.selectedPosition.candidates}
                  />
                </div>
              </div>
              {
                this.props.addPositionCandidateModal.open
                  ?
                  <AddCandidateModal
                    position={this.props.selectedPosition}
                    closeAddCandidateModal={this.onCloseAddCandidateModal}
                  />
                  :
                  false
              }
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