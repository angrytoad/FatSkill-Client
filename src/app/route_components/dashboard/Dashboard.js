import React from 'react';
import Helmet from 'react-helmet';

import UserHeader from '../../reusable/UserHeader/UserHeader';

const Dashboard = React.createClass({

  render() {
    return (
      <div id="Dashboard">
        <Helmet
          title="Dashboard"
        />
        <UserHeader />
        {this.props.children}
      </div>
    )
  }

});

export default Dashboard;