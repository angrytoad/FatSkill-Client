import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const RevisionDataDisplayRow = React.createClass({

  render() {
    return (
      <tr className="RevisionDataDisplayRow">
        <td>{this.props.row.title}</td>
        <td className="description">{this.props.row.description}</td>
        <td>{moment(this.props.row.created_at).format('ddd Do MMM YYYY')}</td>
        <td>0%</td>
        <td>
          <Link to={"/dashboard/tests/view/"+this.props.test.id+"/revision/"+this.props.row.id}>
            <i className="material-icons">remove_red_eye</i>
          </Link>
        </td>
      </tr>
    )
  }

});

export default RevisionDataDisplayRow;