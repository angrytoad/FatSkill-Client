import React from 'react';
import {connect} from 'react-redux';

import { getUserInformation } from '../actions';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({
    getUserInformation: () => dispatch(getUserInformation())
  });

const DashboardMain = React.createClass({

  componentWillMount() {
    this.props.getUserInformation();
  },

  render() {
    return (
      <div id="DashboardMain" className="container">
        <h1>Dashboard Main</h1>
        <p>This is the main dashboard</p>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);