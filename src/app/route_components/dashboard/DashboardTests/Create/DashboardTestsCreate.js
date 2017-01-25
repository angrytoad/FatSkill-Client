import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { sendCreationRequest } from './actions';

import './DashboardTestsCreate.scss';

const mapStateToProps = ({ currentGeneratedTest }) =>
  ({
    currentGeneratedTest
  });

const mapDispatchToProps = dispatch =>
  ({
    sendCreationRequest: (formData) => dispatch(sendCreationRequest(formData))
  });

const DashboardTestsCreate = React.createClass({

  handleProcessCreationForm(e) {
    e.preventDefault();

  },

  render() {
    return (
      <div id="DashboardTestsCreate" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>New Test</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/dashboard/tests">
              <li>Test Bench</li>
            </Link>
            <li>New Test</li>
          </ul>
        </div>
        <div className="test-body row">
          <div className="column">
            <h5>Get Started</h5>
            <p>Fill out the details below to get started.</p> 
          </div>
          <div id="test-creation-help-column" className="column">
            <h5>Need Help?</h5>
            <p>
              Tests are super simple to create and modify.
            </p>
            <div className="step">
              <span className="title">
                <span>Step #1</span>
              </span>
              <p className="body">
                <i className="material-icons">create</i>
                <span>
                  Give your test a name and a short introduction so candidates are given some context before the test
                  begins.
                </span>
              </p>
            </div>
            <div className="step">
              <span className="title">
                <span>Step #2</span>
              </span>
              <p className="body">
                <i className="material-icons">device_hub</i>
                <span>
                  Create your first revision, revisions allow you to keep track of which version of test your candidates
                  have completed and allow you to modify tests whenever you want. You can learn more about revisions <Link to="/docs/tests">here.</Link>
                </span>
              </p>
            </div>
            <div className="step">
              <span className="title">
                <span>Step #3</span>
              </span>
              <p className="body">
                <i className="material-icons">flip_to_front</i>
                <span>
                  Drag and drop your questions, weight answers and give questions individual context.
                </span>
              </p>
            </div>
            <p>
              Tests have been designed in a way to provide ultimate flexiblity to users. By allowing a test to be modified
              and revised even after it has been created, they can be continually updated with newer content without having
              the pain of re-creating it.
            </p>
            <p>If you would like to read more about tests, you can find out <Link to="/docs/tests">more information here.</Link></p>
          </div>
        </div>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTestsCreate);