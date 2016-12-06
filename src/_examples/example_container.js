import React from 'react';
import { connect } from 'react-redux';

import { testAction } from './example_actions';
import './example_css.css';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Below is an example redux container that uses react and hooks up to the redux state. mapStateToProps
 * is responsible for importing the individual bits of redux state into your application,
 * whilst mapDispatch to props will allow you to dispatch actions off to the
 * store.
 */

const mapStateToProps = ({ test }) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({
    testAction: () => dispatch(testAction())
  });

const ExampleContainer = React.createClass({

  render() {

    return (
      <div id="example-container">
        <h2>If the text appears below it means Redux is fully configured, take a look at redux devtools to view the action</h2>
        <h3>To open redux devtools, press ctrl+h</h3>
        <h4>{this.props.test}</h4>
      </div>
    )
  },

  componentDidMount() {
    this.props.testAction();
  }



});

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer);