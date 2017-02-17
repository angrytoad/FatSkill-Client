import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { clearCurrentGeneratedTest } from '../Create/actions';
import { getCurrentLoadedTest, clearCurrentLoadedTest } from './actions';

import RevisionDataDisplay from './RevisionDataDisplay';

const mapStateToProps = ({ currentGeneratedTest, currentLoadedTest }) =>
  ({
    currentGeneratedTest,
    currentLoadedTest
  });

const mapDispatchToProps = dispatch =>
  ({
    clearCurrentGeneratedTest: () => dispatch(clearCurrentGeneratedTest()),
    getCurrentLoadedTest: (uuid) => dispatch(getCurrentLoadedTest(uuid)),
    clearCurrentLoadedTest: () => dispatch(clearCurrentLoadedTest()),
  });

const DashboardTestView = React.createClass({
  
  componentWillUnmount(){
    this.props.clearCurrentGeneratedTest();
    this.props.clearCurrentLoadedTest();
  },

  componentWillMount(){
    this.props.getCurrentLoadedTest(this.props.params.test_id);
  },
  
  render() {

    return (
      <div id="DashboardTestView" className="container dashboard-content">
        <div className="dashboard-header">
          { 
            this.props.currentGeneratedTest
            ?
              <h1>{this.props.currentGeneratedTest.name}</h1>
            :
              <h1>{this.props.currentLoadedTest.name}</h1>
          }
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/dashboard/tests">
              <li>Test Bench</li>
            </Link>
            <li>{this.props.currentLoadedTest.name}</li>
          </ul>
        </div>
        <div className="row">
          {
            this.props.currentLoadedTest
            ?
              <RevisionDataDisplay
                test={this.props.currentLoadedTest}
              />
            :
              false
          }

        </div>
      </div>
    )
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTestView);