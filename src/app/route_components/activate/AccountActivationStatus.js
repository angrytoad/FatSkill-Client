import React from 'react';
import { Link } from 'react-router';

const AccountActivationStatus = React.createClass({

  render() {
    return (
      <div id="AccountActivationStatus">
        {
          !this.props.accountActivationStatus.success
          ?
            <div>
              <p className="success animated fadeIn">Verified</p>
              <blockquote className="success">
                <p>
                  Great, we've managed to verify you, we've automatically logged you in so you may now head to the
                  dashboard.
                </p>
              </blockquote>
              <Link to="/dashboard">
                <button className="button button-outline">My Dashboard</button>
              </Link>
            </div>
          :
            <div>
              {
                this.props.accountActivationStatus.error.length > 0
                ?
                  <div>
                    <p className="failed animated fadeIn">Not Verified</p>
                    <blockquote className="warning">
                      <p>
                        Unfortunately, we couldn't activate your account. Your token may be expired, please resend another token to your email.
                      </p>
                    </blockquote>
                  </div>
                :
                  <div>
                    <p className="pending animated fadeIn">Pending</p>
                  </div>
              }
            </div>
        }
      </div>
    )
  }

});

export default AccountActivationStatus;