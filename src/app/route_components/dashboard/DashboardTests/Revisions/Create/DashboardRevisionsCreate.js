import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { getCurrentLoadedTest, clearCurrentLoadedTest } from '../../View/actions';
import { mockRevision } from './actions';

import RevisionCreationEditor from './RevisionCreationEditor';
import RevisionCreationIntro from './RevisionCreationIntro';

const mapStateToProps = ({ currentLoadedTest, currentGeneratedRevision }) =>
  ({
    currentLoadedTest,
    currentGeneratedRevision
  });

const mapDispatchToProps = dispatch =>
  ({
    getCurrentLoadedTest: (uuid) => dispatch(getCurrentLoadedTest(uuid)),
    clearCurrentLoadedTest: () => dispatch(clearCurrentLoadedTest()),

    mockRevision: () => dispatch(mockRevision()),
  });

const DashboardRevisionsCreate = React.createClass({

  componentDidMount() {
    this.props.getCurrentLoadedTest(this.props.params.test_id);
    this.props.mockRevision();
  },

  componentWillUnmount() {
    this.props.clearCurrentLoadedTest();
  },

  render() {
    return (
      <div id="DashboardRevisionsCreate" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Create a new revision</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/dashboard/tests">
              <li>Test bench</li>
            </Link>
            <Link to={"/dashboard/tests/view/"+this.props.params.test_id}>
              <li>{this.props.currentLoadedTest.name}</li>
            </Link>
            <li>Create a new revision</li>
          </ul>
        </div>
        {
          this.props.currentGeneratedRevision
          ?
            <RevisionCreationEditor />
          :
            <RevisionCreationIntro name={this.props.currentLoadedTest.name} />
        }
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRevisionsCreate);