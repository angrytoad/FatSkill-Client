import React from 'react';

import HomeMainContentIntro from './HomeMainContentIntro';
import HomeMainContentImportancyGraph from './HomeMainContentImportancyGraph';
import HomeMainContentAntiCheat from './HomeMainContentAntiCheat';
import HomeMainContentFeatures from './HomeMainContentFeatures';

const HomeMainContent = React.createClass({

  render() {
    return (
      <div id="HomeMainContent" className="animated fadeIn">
        <HomeMainContentIntro />
        <HomeMainContentFeatures />
        <HomeMainContentAntiCheat />
        <HomeMainContentImportancyGraph />
      </div>
    )
  }

});

export default HomeMainContent;