import React from 'react';
import Helmet from 'react-helmet';

import './Login.scss';
import Header from '../../reusable/Header/Header';

const Login = React.createClass({

  render() {
    return (
      <div id="Login">
        <Helmet
          title="Login to your account"
        />
        <Header />
        <div className="animated fadeIn container">
          <form>
            <div id="input-wrapper">
              <h3>Login to your account</h3>
              <div>
                <label><i className="material-icons">email</i> Email</label>
                <input type="text" autoFocus={true}/>
              </div>
              <div>
                <label><i className="material-icons">fingerprint</i> Password</label> 
                <input type="password" />
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

export default Login;
