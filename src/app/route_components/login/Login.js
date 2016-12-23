import React from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import serialize from 'form-serialize';

import './Login.scss';
import Header from '../../reusable/Header/Header';

import { loginRequestReset, sendLoginRequest, checkIfAuthenticated } from './actions';

const mapStateToProps = ({ loginRequestStatus, nextAuthRoute }) =>
  ({
    loginRequestStatus,
    nextAuthRoute
  });

const mapDispatchToProps = dispatch =>
  ({
    loginRequestReset: () => dispatch(loginRequestReset()),
    sendLoginRequest: (formData, nextRoute) => dispatch(sendLoginRequest(formData, nextRoute)),
    checkIfAuthenticated: () => dispatch(checkIfAuthenticated())
  });


const Login = React.createClass({

  submitLoginForm(e) {
    e.preventDefault();
    this.props.loginRequestReset();
    let form = document.querySelector('#LoginForm');
    let formData = serialize(form, { hash: true });
    this.props.sendLoginRequest(formData, this.props.nextAuthRoute);
  },
  
  componentDidMount() {
    let token = JSON.parse(localStorage.getItem('fs_api_t'));
    if(token !== null){
      this.props.checkIfAuthenticated()
    }
  },

  render() {
    return (
      <div id="Login">
        <Helmet
          title="Login to your account"
        />
        <Header pathname={this.props.location.pathname}/>
        <div className="animated fadeIn container">
          <form id="LoginForm" onSubmit={(e) => this.submitLoginForm(e)}>
            <div id="input-wrapper">
              {
                this.props.nextAuthRoute.length > 0
                ?
                  <blockquote className="warning">
                    <h5>Oops!</h5>
                    <p>
                      You've been logged out, please sign in again to continue.
                    </p>
                  </blockquote>
                :
                  false
              }
              <h3>Login to your account</h3>
              {
                this.props.loginRequestStatus.success
                  ?
                    false
                  :
                  <div>
                    {
                      this.props.loginRequestStatus.error.length > 0
                        ?
                        <blockquote className="warning">
                          <h5>Oops!</h5>
                          <p>
                            Something doesn't appear to be quite right, please fix the following errors below:
                          </p>
                          <p>
                            <strong>{ this.props.loginRequestStatus.error }</strong>
                          </p>
                        </blockquote>
                        :
                        false
                    }
                  </div>
              }
              <div>
                <label><i className="material-icons">email</i> Email</label>
                <input type="text" name="email" autoFocus={true}/>
              </div>
              <div>
                <label><i className="material-icons">fingerprint</i> Password</label> 
                <input name="password" type="password" />
              </div>
              <div>
                <button className="button button-outline">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
