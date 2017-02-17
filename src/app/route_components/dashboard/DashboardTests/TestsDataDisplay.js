import React from 'react';

import TestsDataDisplayRow from  './TestsDataDisplayRow'

const TestsDataDisplay = React.createClass({

  render() {
    
    let rows = this.props.testsData.map((element, index) => {
      return <TestsDataDisplayRow key={index} row={element}/>
    });

    return (
      <table id="TestsDataDisplay">
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Revisions</th>
          <th>Response Rate</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    )
  }

});

export default TestsDataDisplay;