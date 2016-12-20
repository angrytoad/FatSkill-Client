import React from 'react';
import { Link } from 'react-router';

const HomeMainContentIntro = React.createClass({

  render() {
    return (
      <div id="HomeMainContentIntro" className="container">
        <h3><i className="material-icons">insert_chart</i> Get the most insightful metrics to date</h3>
        <div className="row">
          <div className="column">
            <p>
              Nobody likes exams, and the same goes for potential candidates, while all recruiters will know of the
              benefits of psychometric testing, its not the only tool you should use to evaluate how well a candidate is suited to a role.
              Many jobs roles are created in a vacuum and exist to replace an existing skills gap that may have appeared in
              a business. Companies and Recruiters need to be sure that the candidates put forward for this role are not only
              a good personality fit, but also possess all of the right knowledge to 'hit the ground running'. This is where
              Fatskill can help.
            </p>
            <p>
              Fatskill enables you to add reliable and managed candidate testing to your existing workflow, it has been designed as
              to be as unobtrusive as possible so you can focus on what matters. Our API allows you to integrate
              Fatskill into your existing desktop applications seamlessly.
            </p>
            <Link to="/register">
              <button className="button button-outline">Get Started</button>
            </Link>
          </div>
          <div className="img-column">
            <img src="/assets/logo_min.png" />
          </div>
        </div>
      </div>
    )
  }

});

export default HomeMainContentIntro;