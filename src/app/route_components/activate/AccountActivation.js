import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import serialize from 'form-serialize';

import Header from '../../reusable/Header/Header';
import AccountActivationStatus from './AccountActivationStatus';

import { requestAccountActivation, accountActivationRequestReset, requestAccountActivationResend, accountActivationResendRequestReset } from './actions';

import './AccountActivation.scss';

const mapStateToProps = ({ accountActivationStatus, accountActivationResendStatus }) =>
  ({
    accountActivationStatus,
    accountActivationResendStatus
  });

const mapDispatchToProps = dispatch =>
  ({
    requestAccountActivation: (token) => dispatch(requestAccountActivation(token)),
    accountActivationRequestReset: () => dispatch(accountActivationRequestReset()),
    requestAccountActivationResend: (formData) => dispatch(requestAccountActivationResend(formData)),
    accountActivationResendRequestReset: () => dispatch(accountActivationResendRequestReset())
  });

const AccountActivation = React.createClass({

  getInitialState() {
    return ({
      showEmailInput: false,
    });
  },

  componentDidMount() {
    if(typeof this.props.params.token !== 'undefined'){
      this.props.requestAccountActivation(this.props.params.token);
    }
  },

  componentWillUnmount() {
    this.props.accountActivationRequestReset();
    this.props.accountActivationResendRequestReset();
  },

  handleRequestAccountActivationResend(e) {
    e.preventDefault();
    let form = document.querySelector('#AccountActivationResendForm');
    let formData = serialize(form, { hash:true });
    this.props.requestAccountActivationResend(formData);
  },

  handleShowCodeForm() {
    this.setState({
      showEmailInput: true
    });
  },

  render() {
    return (
      <div id="AccountActivation">
        <Helmet
          title="Activate your account"
        />
        <Header pathname={this.props.location.pathname} />
        <div className="container animated fadeIn">
          <h3>Prepare for take-off!</h3>
          <div className="row">
            <div className="column column-50">
              <p>
                Hold on just a second while we activate your account, we'll let you know when you can go to your dashboard
              </p>
              <p>
                You're activation token is:<br /> <strong>{this.props.params.token}</strong>
              </p>
              <div>
                {
                  this.state.showEmailInput
                  ?
                    <div className="animated fadeIn">
                      {
                        this.props.accountActivationResendStatus.success
                        ?
                          <blockquote className="success">
                            <p>
                              We've sent out an email to you to make sure we've got the right account, all you need to do it click
                              that link and you'll be good to go!
                            </p>
                          </blockquote>
                        :
                          <div>
                            {
                              this.props.accountActivationResendStatus.error.length > 0
                                ?
                                <blockquote className="warning">
                                  <p>
                                    We're having some trouble sending you out another activation code, are your details correct?
                                  </p>
                                </blockquote>
                                :
                                false

                            }
                          </div>
                      }
                      <form id="AccountActivationResendForm" onSubmit={(e) => this.handleRequestAccountActivationResend(e)}>
                        <input type="text" placeholder="Enter your email address" autoFocus={true} />
                        <button className="button button-outline">Send me another code</button>
                      </form>
                    </div>
                  :
                    <button className="button button-outline" onClick={(e) => this.handleShowCodeForm()}>My code is lost/invalid</button>
                }

              </div>
            </div>
            <div className="column column-50">
              <AccountActivationStatus accountActivationStatus={this.props.accountActivationStatus} />
            </div>
          </div>

        </div> 
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivation);