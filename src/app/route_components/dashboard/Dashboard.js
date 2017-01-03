import React from 'react';
import Helmet from 'react-helmet';

import UserHeader from '../../reusable/UserHeader/UserHeader';
import DashboardHeader from '../../reusable/DashboardHeader/DashboardHeader';

import './Dashboard.scss';

const Dashboard = React.createClass({

  render() {
    return (
      <div id="Dashboard">
        <Helmet
          title="Dashboard"
        />
        <UserHeader />
        <DashboardHeader />
        {this.props.children}
      </div>
    )
  }

});

export default Dashboard;