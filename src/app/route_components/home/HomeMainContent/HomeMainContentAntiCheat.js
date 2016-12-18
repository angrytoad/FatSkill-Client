import React from 'react';
import { Link } from 'react-router';

import './images/secret-agent.svg';
import './images/security_background.png';

const HomeMainContentAntiCheat = React.createClass({

  render() {
    return (
      <div id="HomeMainContentAntiCheat">
        <div className="container">
          <h3><i className="material-icons">lock</i> Fatskill Anti-Cheat</h3>
          <div className="row">
            <div className="column">
              <p>
                Nobody likes a cheater, and candidates that claim to be more qualified than they are can hit in both your
                pockets and reputation, Fatskill Anti-Cheat&copy; comes as standard with all accounts and can help detect cheating
                from candidates and provide discreet and private statistics for your eyes only in order for you to act upon.
              </p>
              <p>
                We are always looking to expand the range of tools we use to detect cheating and in the near future will be
                integrating a system for detecting plagiarism in long-format answers.
              </p>
              <Link to="/register">
                <button className="button button-outline">Create a free account</button>
              </Link>
            </div>
            <div className="img-column">
              <img src="/assets/secret-agent.svg" />
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default HomeMainContentAntiCheat;