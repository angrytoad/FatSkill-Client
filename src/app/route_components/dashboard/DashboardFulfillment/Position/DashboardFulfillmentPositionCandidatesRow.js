import React from 'react';
import moment from 'moment';

const DashboardFulfillmentPositionCandidatesRow = React.createClass({

  render() {

    return (
      <tr className="DashboardFulfillmentPositionCandidatesRow">
        <td>{this.props.candidate.email}</td>
        <td>{this.props.candidate.name}</td>
        <td>{moment(this.props.candidate.added.date).format('DD/MM/YYYY')}</td>
        <td>
          {
            this.props.candidate.completed
              ?
              <i className="material-icons">check_circle</i>
              :
              <i className="material-icons">not_interested</i>
          }
        </td>
        <td>
          {
            this.props.candidate.completed
              ?
              this.props.candidate.score+'%'
              :
              'N/A'
          }
        </td>
      </tr>
    )
  }

});

export default DashboardFulfillmentPositionCandidatesRow;