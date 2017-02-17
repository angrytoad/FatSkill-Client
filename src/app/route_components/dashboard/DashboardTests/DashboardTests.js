import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { getTestsData } from './actions';

import TestsDataDisplay from './TestsDataDisplay';

import './DashboardTests.scss';
import './Revisions/DashboardRevisions.scss';

const mapStateToProps = ({ testsData }) =>
  ({
    testsData
  });

const mapDispatchToProps = dispatch =>
  ({
    getTestsData: () => dispatch(getTestsData())
  });

const DashboardTests = React.createClass({

  componentDidMount() {
    this.props.getTestsData();
  },

  render() {

    let revisionCount = 0;
    let responseRate = 0;

    for(let i=0; i<this.props.testsData.length; i++){
      revisionCount += this.props.testsData[i].revisions.length;
    }

    return (
      <div id="DashboardTests" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Test Bench</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <li>Test Bench</li>
          </ul>
        </div>
        <div className="test-header">
          <Link to="/dashboard/tests/create">
            <button className="button button-black button-outline">New Test</button>
          </Link>
        </div>
        <div className="row" id="DashboardTestsHeader">
          <div className="column">
            <div className="block">
              <div className="block-child">
                <div>
                  <span className="large">{this.props.testsData.length}</span>
                </div>
                <div>
                  <span className="small">tests</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="block">
              <div className="block-child">
                <div>
                  <span className="large">{revisionCount}</span>
                </div>
                <div>
                  <span className="small">Revisions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="block last">
              <div className="block-child">
                <div>
                  <span className="large">{responseRate}%</span>
                </div>
                <div>
                  <span className="small">Average Response Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestsDataDisplay 
          testsData={this.props.testsData}
        />
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTests);