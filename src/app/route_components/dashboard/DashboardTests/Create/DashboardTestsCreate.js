import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import serialize from 'form-serialize';

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

  getInitialState() {
    return({
      descriptionWords: 0
    });
  },

  handleUpdateDescriptionWords(e) {
    let string = e.target.value;
    let count = string.split(' ').length-1;
    this.setState({
      descriptionWords: count
    });
  },

  handleShowHelp(e) {
    let type = e.target.dataset.help;
    let element = document.getElementById(type);
    element.classList.add('show');
  },

  handleHideHelp(e) {
    let type = e.target.dataset.help;
    let element = document.getElementById(type);
    element.classList.remove('show');
  },

  handleProcessCreationForm(e) {
    e.preventDefault();
    let form = document.querySelector('#create-test-form');
    let data = serialize(form, { hash:true });
    if(typeof data.name !== 'undefined' && typeof data.description !== 'undefined'){
      if(typeof data.public === 'undefined'){
        data.public = false;
      }else{
        data.public = true;
      }
      console.log(data);
      this.props.sendCreationRequest(data);
    }
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
          <div id="test-creation-form-column" className="column">
            <h5>Get Started</h5>
            <p>Fill out the details below to get started.</p>
            <form id="create-test-form" onSubmit={this.handleProcessCreationForm}>
              <div>
                <label htmlFor="name">
                  <div>
                    <i className="material-icons" data-help="title-help" onMouseOver={this.handleShowHelp} onMouseLeave={this.handleHideHelp}>help</i>
                    <div id="title-help" className="input-help">
                      <p>Once you have given your test a title, you will be unable to change it, this is to ensure consistency and minimal confusion for candidates.</p>
                    </div>
                  </div>

                  Title
                </label>
                <input name="name" type="text" />
              </div>
              <div>
                <label htmlFor="name">
                  <div>
                    <i className="material-icons" data-help="description-help" onMouseOver={this.handleShowHelp} onMouseLeave={this.handleHideHelp}>help</i>
                    <div id="description-help" className="input-help">
                      <p>
                        Your test description should aim to introduce and give a brief overview of the test your candidate will take, you can use the test description
                        to let candidates know what type of questions they will be answering or any other information.
                      </p>
                    </div>
                  </div>
                  Description ({this.state.descriptionWords} words)
                </label>
                <textarea name="description" onChange={this.handleUpdateDescriptionWords}/>
              </div>
              <div>
                <input type="checkbox" defaultChecked={true} name="public" />
                <span>
                  <div>
                    <i className="material-icons" data-help="public-help" onMouseOver={this.handleShowHelp} onMouseLeave={this.handleHideHelp}>help</i>
                    <div id="public-help" className="input-help">
                      <p>
                        Setting your test to public means that we may select your test as part of our premium selection list, as more high quality tests are
                        added to FatSkill, we want to offer comprehensive and well made tests for other users to use. In return for allowing your test
                        to be public, we will include prominent credit for your organisation on the test.
                      </p>
                    </div>
                  </div>
                  Public
                </span>
              </div>
              <div>
                <button className="button button-black button-outline">Create Test</button>
              </div>
            </form>
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