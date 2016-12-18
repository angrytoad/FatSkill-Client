import React from 'react';

const HomeMainContentFeatures = React.createClass({

  render() {
    return (
      <div id="HomeMainContentFeatures" className="container">
        <h3><i className="material-icons">build</i> Features like no other</h3>
        <div id="FeaturesGrid">
          <div className="row">
            <div className="column">
              <div className="feature-wrapper">
                <h5><i className="material-icons">access_time</i> 24/7 Availability</h5>
                <p>No need to wait until your back in the office, with online access 24/7 from desktop or mobile.</p>
              </div>
            </div>
            <div className="column">
              <div className="feature-wrapper">
                <h5><i className="material-icons">create</i> Flexible Test Creation</h5>
                <p>Create tests as short or as long as you want, it doesn't matter how many questions you add, we won't limit you.</p>
              </div>
            </div>
            <div className="column">
              <div className="feature-wrapper">
                <h5><i className="material-icons">chat_bubble</i> Instant Feedback</h5>
                <p>When candidates completes tests receive instant feedback the moment their test is submitted.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column active">
              <div className="feature-wrapper">
                <h5><i className="material-icons">business</i> Designed for businesses</h5>
                <p>
                  Because Fatskill is designed for businesses, it's designed to fit your workflow. Every tool has been
                  created to facilitate your workflow.
                </p>
              </div>
            </div>
            <div className="column active">
              <div className="feature-wrapper">
                <h5><i className="material-icons">check</i> More than just Yes/No</h5>
                <p>With a whole suite of question types, you can focus on asking candidates all the right questions rather
                than fighting with a form.</p>
              </div>
            </div>
            <div className="column active">
              <div className="feature-wrapper">
                <h5><i className="material-icons">developer_board</i> Super-Powered Insights</h5>
                <p>Go beyond what normal tests see, gain insight into the reading level and comprehension of long form answers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="feature-wrapper">
                <h5><i className="material-icons">shopping_cart</i> Simple Pricing</h5>
                <p>We don't hit you with hidden charges, our simple pricing model guarantees you can budget consistently each month.</p>
              </div>
            </div>
            <div className="column">
              <div className="feature-wrapper">
                <h5><i className="material-icons">https</i> Secure as Standard</h5>
                <p>We only use HTTPS as standard, we believe security always takes precedent over supporting outdated browsers.</p>
              </div>
            </div>
            <div className="column">
              <div className="feature-wrapper">
                <h5><i className="material-icons">view_list</i> Top-tier organisation</h5>
                <p>We've worked hard to keep your dashboard organised, no matter how much information you have.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default HomeMainContentFeatures;