import React from 'react';
import moment from 'moment';

const DashboardFulfillmentPositionHeader = React.createClass({

  

  render() {
    return (
      <div id="DashboardFulfillmentPositionHeader" className="column">
        <div className="row">
          <div className="column">
            <button className="button button-black button-outline" onClick={() => this.props.openAddCandidateModal()}>Add a Candidate</button>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="text-wrap first">
              <div>
                <div>
                  <span className="large">{moment(this.props.position.expiry).diff(moment(), 'days')}</span>
                </div>
                <div>
                  {
                    moment(this.props.position.expiry).diff(moment(), 'days') > 1
                    ?
                      <span className="small">Days until expiry</span>
                    :
                      <span className="small">Day until expiry</span>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text-wrap second">
              <div>
                <div>
                  <span className="large">{this.props.position.candidates_completed}/{this.props.position.candidate_count}</span>
                </div>
                <div>
                  <span className="small">Candidate Responses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text-wrap third">
              <div>
                <div>
                  <span className="large">{this.props.position.overall_score}%</span>
                </div>
                <div>
                  <span className="small">Overall Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default DashboardFulfillmentPositionHeader;