import React from 'react';
import { Link } from 'react-router';

const TestsDataDisplayRow = React.createClass({

  render() {
    return (
      <tr className="TestsDataDisplayRow">
        <td>{this.props.row.name}</td>
        <td>{this.props.row.description}</td>
        <td>{this.props.row.revisions.length}</td>
        <td>0%</td>
        <td>
          <Link to={"/dashboard/tests/view/"+this.props.row.id}>
            <i className="material-icons">remove_red_eye</i>
          </Link>
        </td>
      </tr>
    )
  }

});

export default TestsDataDisplayRow;