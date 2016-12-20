import React from 'react';
import { Link } from 'react-router';

import './home_banner.jpg';
import './home_banner_colour_min.jpg';

const HomeBanner = React.createClass({

  render() {
    return (
      <div id="HomeBanner" className="animated fadeIn">
        <div id="HomeBannerContentWrapper">
          <div id="HomeBannerContentWrapperBackground">
            <h2>Whatever the Job, <strong>we've got you covered.</strong></h2>
            <p>No nonsense applicant testing for the modern business.</p>
            <Link to="/register">
              <button className="button button-outline">Sign Up For Free</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

});

export default HomeBanner;