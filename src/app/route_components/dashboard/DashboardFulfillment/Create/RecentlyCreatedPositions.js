import React from 'react';
import moment from 'moment';

const RecentlyCreatedPositions = React.createClass({

  render() {

    let rows = this.props.positions.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.position}</td>
            <td>{element.candidates}</td>
            <td>{moment(element.expiry).format('DD-MM-YYYY')}</td>
          </tr>
        )
    });

    return (
      <table id="RecentlyCreatedPositions">
        <thead>
          <tr>
            <th>Position</th>
            <th>Candidates</th>
            <th>Expiry</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    )
  }

});

export default RecentlyCreatedPositions;