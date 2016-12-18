import React from 'react';

const HomeMainContentImportancyGraph = React.createClass({

  render() {
    return (
      <div id="HomeMainContentImportancyGraph" className="container">
        <h3><i className="material-icons">pie_chart</i> Fatskill provides a great ROI</h3>
        <p>
          We're strong believers a full and fair set of analysis should be done with candidates to work out their strengths and
          weaknessess, thats why when we designed Fatskill we aimed for it to be as unobtrusive as possible. We don't take over and clutter your
          recruitment process, we simply enable a more precise and candidate focused form of testing.
        </p>
        <div id="ImportancyGraph">
          <div className="row">
            <div id="y-axis" className="column-10">
              <p>Analysis Type</p>
            </div>
            <ul id="bars" className="column">
              <li className="active"><strong>Fatskill</strong> Aptitude Testing</li>
              <li>Alternative Aptitude Testing</li>
              <li>Psychometric Analysis</li>
              <li>Informal Assessments</li>
            </ul>
          </div>
          <div className="row">
            <div id="x-axis-wrapper">
              <div id="x-axis">
                <div className="row">
                  <div className="column">
                    <i className="material-icons">arrow_back</i>
                    Lower ROI
                  </div>
                  <div className="column">
                    Higher ROI
                    <i className="material-icons">arrow_forward</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Being able to screen and hire for critical job positions stands testament to the work and detail that goes into
          recruitment. Pouring through the data we have found that overall the ROI for Fatskills Aptitude Testing is
          far greater when matched like for like against other testing methods.
        </p>
      </div>
    )
  }

});

export default HomeMainContentImportancyGraph;