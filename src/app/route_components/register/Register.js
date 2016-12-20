import React from 'react';
import Helmet from 'react-helmet';
import serialize from 'form-serialize';
import {connect} from 'react-redux';

import Header from '../../reusable/Header/Header';

import { sendRegistrationRequest, registrationRequestReset } from './actions';

import './Register.scss';

const mapStateToProps = ({ registrationRequestStatus }) =>
  ({
    registrationRequestStatus
  });

const mapDispatchToProps = dispatch =>
  ({
    sendRegistrationRequest: (formData) => dispatch(sendRegistrationRequest(formData)),
    registrationRequestReset: () => dispatch(registrationRequestReset()),
  });

const Register = React.createClass({

  submitRegistrationForm(e) {
    e.preventDefault();
    this.props.registrationRequestReset();
    let form = document.querySelector('#RegistrationForm');
    let formData = serialize(form, { hash: true });
    this.props.sendRegistrationRequest(formData);
  },

  componentWillUnmount() {
    this.props.registrationRequestReset();
  },

  render() {

    return (
      <div id="Register">
        <Helmet
          title="Register your account"
        />
        <Header pathname={this.props.location.pathname}/>
        <div className="animated fadeIn container">
          <form id="RegistrationForm" onSubmit={(e) => this.submitRegistrationForm(e)}>
            <div id="input-wrapper">
              <h3>Register an account</h3>
              {
                this.props.registrationRequestStatus.success
                ?
                  <blockquote className="success">
                    <h5>Great!</h5>
                    <p>
                      We've sent out an email to you to make sure we've got the right account, all you need to do it click
                      that link and you'll be good to go!
                    </p>
                  </blockquote>
                :
                  <div>
                    {
                      this.props.registrationRequestStatus.error.length > 0
                      ?
                        <blockquote className="warning">
                          <h5>Oops!</h5>
                          <p>
                            Something doesn't appear to be quite right, please fix the following errors below:
                          </p>
                          <p>
                            <strong>{ this.props.registrationRequestStatus.error }</strong>
                          </p>
                        </blockquote>
                      :
                        false
                    }
                  </div>
              }
              <div className="row">
                <div className="column">
                  <label><i className="material-icons">account_circle</i> Name</label>
                  <input type="text" name="name" autoFocus={true}/>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label><i className="material-icons">email</i> Email</label>
                  <input type="text" name="email"/>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label><i className="material-icons">fingerprint</i> Password</label>
                  <input type="password" name="password" />
                </div>
                <div className="column">
                  <label><i className="material-icons">fingerprint</i> Repeat Password</label>
                  <input type="password" name="passwordConfirm" />
                </div>
              </div>
              <div>
                <button className="button button-outline">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);