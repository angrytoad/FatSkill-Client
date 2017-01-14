import React from 'react';

import FulfillmentDataDisplayRow from './FulfillmentDataDisplayRow';

const FulfillmentDataDisplay = React.createClass({
  
  render() {
    
    let rows = this.props.fulfillmentData.map((element, index) => {
        return <FulfillmentDataDisplayRow key={index} row={element}/>
    });
    
    return (
      <table id="FulfillmentDataDisplay">
        <thead>
          <tr>
            <th>Position</th>
            <th>Sector</th>
            <th>Company</th>
            <th>Location</th>
            <th>Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
  
});

export default FulfillmentDataDisplay;