import React from 'react';
import {connect} from 'react-redux';

import RevisionCreationSummary from './RevisionCreationSummary';

const mapStateToProps = ({ currentGeneratedRevision }) =>
  ({
    currentGeneratedRevision
  });

const mapDispatchToProps = dispatch =>
  ({
    
  });

const RevisionCreationEditor = React.createClass({

  render() {
    console.log(this.props.currentGeneratedRevision);

    return (
      <div id="RevisionCreationEditor">
        <RevisionCreationSummary revision={this.props.currentGeneratedRevision} />
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(RevisionCreationEditor);