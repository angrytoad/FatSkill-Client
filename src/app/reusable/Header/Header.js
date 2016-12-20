import React from 'react';
import {connect} from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { setHashPath, clearHashPath } from './actions';

import './Header.scss';

import './logo_min.png';

const mapStateToProps = ({ hashPath }) =>
  ({
    hashPath
  });

const mapDispatchToProps = dispatch =>
  ({
    setHashPath: (hashPath) => dispatch(setHashPath(hashPath)),
    clearHashPath: () => dispatch(clearHashPath())
  });

const Header = React.createClass({

  getInitialState(){
    return ({
      hashPath: ''
    });
  },

  scrollToView(id){
    if(this.props.pathname !== '/'){
      this.props.setHashPath(id);
      browserHistory.push('/');
    }else{
      document.getElementById(id).scrollIntoView(true,{
        behavior: "smooth"
      });
    }
  },

  componentDidMount() {
    if(this.props.hashPath.length > 0){
      document.getElementById(this.props.hashPath).scrollIntoView(true,{
        behavior: "smooth"
      });
      this.props.clearHashPath();
    }
  },

  render() {
    return (
      <div id="Header">
        <div className="container">
          <div className="row">
            <div className="column">
              <Link to="/">
                <img id="logo" src="/assets/logo_min.png" />
              </Link>
            </div>
            <div className="column column-75">
              <ul id="menu">
                <Link>
                  <li onClick={(e) => this.scrollToView('HomeMainContentFeatures')}>
                    <i className="material-icons">track_changes</i>
                    Features
                  </li>
                </Link>
                <Link>
                  <li onClick={(e) => this.scrollToView('Pricing')}>
                    <i className="material-icons">attach_money</i>
                    Pricing
                  </li>
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);