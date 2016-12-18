import React from 'react';

import './home_banner.jpg';
import './home_banner_colour.jpg';

const HomeBanner = React.createClass({

  render() {
    return (
      <div id="HomeBanner" className="animated fadeIn">
        <div id="HomeBannerContentWrapper">
          <div id="HomeBannerContentWrapperBackground">
            <h2>Whatever the Job, <strong>we've got you covered.</strong></h2>
            <p>No nonsense applicant testing for the modern business.</p>
            <button className="button button-outline">Sign Up For Free</button>
          </div>
        </div>
      </div>
    )
  }

});

export default HomeBanner;