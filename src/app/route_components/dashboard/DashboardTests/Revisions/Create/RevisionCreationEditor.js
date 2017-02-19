import React from 'react';
import {connect} from 'react-redux';

import { addNewQuestion, removeQuestion } from './actions';

import RevisionCreationSummary from './RevisionCreationSummary';
import RevisionCreationQuestionPicker from './RevisionCreationQuestionPicker';
import RevisionCreationQuestionLister from './RevisionCreationQuestionLister';

const mapStateToProps = ({ currentGeneratedRevision }) =>
  ({
    currentGeneratedRevision
  });

const mapDispatchToProps = dispatch =>
  ({
    addNewQuestion: (type, formattedType) => dispatch(addNewQuestion(type, formattedType)),
    removeQuestion: (uuid) => dispatch(removeQuestion(uuid))
  });

const RevisionCreationEditor = React.createClass({

  handleAddNewQuestion(type, formattedType){
    this.props.addNewQuestion(type, formattedType);
  },
  
  handleRemoveQuestion(uuid){
    this.props.removeQuestion(uuid);
  },

  render() {
    console.log(this.props.currentGeneratedRevision);

    return (
      <div id="RevisionCreationEditor">
        <RevisionCreationSummary revision={this.props.currentGeneratedRevision} />
        <RevisionCreationQuestionPicker
          revision={this.props.currentGeneratedRevision}
          onAddNewQuestion={this.handleAddNewQuestion}
        />
        <RevisionCreationQuestionLister
          revision={this.props.currentGeneratedRevision}  
          onRemoveQuestion={this.handleRemoveQuestion}
        />
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(RevisionCreationEditor);