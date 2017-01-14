import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const FulfillmentDataDisplayRow = React.createClass({

  render() {

    if(moment(this.props.row.expiry).isBefore(moment())){ 
      return (
        <tr className="FulfillmentDataDisplayRow expired">
          <td>{this.props.row.position}</td>
          <td>{this.props.row.sector}</td>
          <td>{this.props.row.company}</td>
          <td>{this.props.row.location}</td>
          <td>{this.props.row.expiry}</td>
          <td>
            <i className="material-icons">remove_red_eye</i>
          </td>
        </tr>
      )
    }else{
      return (
        <tr className="FulfillmentDataDisplayRow">
          <td>{this.props.row.position}</td>
          <td>{this.props.row.sector}</td>
          <td>{this.props.row.company}</td>
          <td>{this.props.row.location}</td>
          <td>{this.props.row.expiry}</td>
          <td>
            <Link to={"/dashboard/fulfillment/positions/"+this.props.row.id}>
              <i className="material-icons">remove_red_eye</i>
            </Link>
          </td>
        </tr>
      )
    }


  }

});

export default FulfillmentDataDisplayRow;