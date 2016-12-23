import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { logout } from './actions';

import './UserHeader.scss';

const mapStateToProps = ({ test }) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({
    logout: () => dispatch(logout())
  });

const UserHeader = React.createClass({

  logout() {
    this.props.logout();
  },
  
  render() {
    return (
      <div id="UserHeader">
        <div className="container">
          <div className="row">
            <div className="column">
              <Link to="/">
                <img id="logo" src="/assets/logo_min.png" />
              </Link>
            </div>
            <div className="column column-75">
              <ul id="menu">
                <Link to="/dashboard">
                  <li>
                    <i className="material-icons">home</i>
                    Dashboard
                  </li>
                </Link>
                <Link to="/dashboard/testing">
                  <li>
                    <i className="material-icons">account_circle</i>
                    Account 
                  </li>
                </Link>
                <Link>
                  <li onClick={(e) => this.logout(e)}>
                    <i className="material-icons">exit_to_app</i>
                    Logout
                  </li>
                </Link>
                <Link to="/help">
                  <li>
                    <button className="button button-black button-outline">
                      Need Help?
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

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);