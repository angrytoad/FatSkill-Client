import React from 'react';

const FulfillmentDataDisplayRow = React.createClass({

  render() {

    /*
     <th>Position</th>
     <th>Sector</th>
     <th>Company</th>
     <th>Location</th>
     <th>Expiry</th>
     <th>Actions</th>
     */

    return (
      <tr className="FulfillmentDataDisplayRow">
        <td>{this.props.row.position}</td>
        <td>{this.props.row.sector}</td>
        <td>{this.props.row.company}</td>
        <td>{this.props.row.location}</td>
        <td>{this.props.row.expiry}</td>
        <td>N/A</td>
      </tr>
    )
  }

});

export default FulfillmentDataDisplayRow;