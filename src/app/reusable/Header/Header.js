import React from 'react';
import { Link } from 'react-router';

import './Header.scss';

import './logo.png';

const Header = React.createClass({

  render() {
    return (
      <div id="Header">
        <div className="container">
          <div className="row">
            <div className="column">
              <Link to="/">
                <img id="logo" src="/assets/logo.png" />
              </Link>
            </div>
            <div className="column column-75">
              <ul id="menu">
                <a href="/#HomeMainContentFeatures">
                  <li>
                    <i className="material-icons">track_changes</i>
                    Features
                  </li>
                </a>
                <a href="#Pricing">
                  <li>
                    <i className="material-icons">attach_money</i>
                    Pricing
                  </li>
                </a>
                <Link to="/login">
                  <li>
                    <i className="material-icons">fingerprint</i>
                    Login
                  </li>
                </Link>
                <Link to="/register">
                  <li>
                    <button className="button button-black button-outline">
                      Free Trial
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default Header;