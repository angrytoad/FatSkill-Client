import React from 'react';
import {connect} from 'react-redux';

import { 
  addNewQuestion, 
  removeQuestion, 
  bulkUpdateQuestions, 
  setCurrentEditedQuestion, 
  clearCurrentEditedQuestion,
  saveCurrentRevision,
} from './actions';

import RevisionCreationSummary from './RevisionCreationSummary';
import RevisionCreationQuestionPicker from './RevisionCreationQuestionPicker';
import RevisionCreationQuestionLister from './RevisionCreationQuestionLister';
import CurrentEditedQuestionModal from './Modals/CurrentEditedQuestionModal';

const mapStateToProps = ({ currentGeneratedRevision, currentEditedQuestion }) =>
  ({
    currentGeneratedRevision,
    currentEditedQuestion
  });

const mapDispatchToProps = dispatch =>
  ({
    addNewQuestion: (type, formattedType) => dispatch(addNewQuestion(type, formattedType)),
    removeQuestion: (uuid) => dispatch(removeQuestion(uuid)),
    updateQuestionOrdering: (newOrder) => dispatch(bulkUpdateQuestions(newOrder)),
    setCurrentEditedQuestion: (question) => dispatch(setCurrentEditedQuestion(question)),
    clearCurrentEditedQuestion: () => dispatch(clearCurrentEditedQuestion()),
    saveCurrentRevision: (revision, test_id) => dispatch(saveCurrentRevision(revision, test_id))
  });

const RevisionCreationEditor = React.createClass({
  
  /**
   * @method handleAddNewQuestion
   * @param type
   * @param formattedType
   */
  handleAddNewQuestion(type, formattedType){
    this.props.addNewQuestion(type, formattedType);
  },
  
  /**
   * @method handleRemoveQUestion
   * @param uuid
   */
  handleRemoveQuestion(uuid){
    this.props.removeQuestion(uuid);
  },
  
  /**
   * @method handleUpdateQuestionOrdering
   * @param currentMapping
   * @param currentQuestions
   */
  handleUpdateQuestionOrdering(currentMapping, currentQuestions){
    let newOrder = [];
    
    for(let i=0; i<currentMapping.length; i++){
      let questionId = currentMapping[i];
      for(let j=0; j<currentQuestions.length; j++){
        let currentQuestion = currentQuestions[j];
        if(currentQuestion.id === questionId){
          newOrder.push(currentQuestion);
        }
      }
    }
    
    this.props.updateQuestionOrdering(newOrder);
  },

  /**
   * @method handleOpenEditQuestion
   * @param question
   */
  handleOpenEditQuestion(question) {
    this.props.setCurrentEditedQuestion(question);
  },

  /**
   * @method handleCloseCurrentEditedQuestionModal
   */
  handleCloseCurrentEditedQuestionModal() {
    this.props.clearCurrentEditedQuestion();
  },

  /**
   * @method handleUpdateCurrentEditedQuestionState
   * @param question
   */
  handleUpdateCurrentEditedQuestionState(question) {
    this.props.setCurrentEditedQuestion(question);
  },

  saveCurrentRevision(e) {
    this.props.saveCurrentRevision(this.props.currentGeneratedRevision, this.props.test_id);
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
          onUpdateQuestionOrdering={this.handleUpdateQuestionOrdering}
          onOpenEditQuestion={this.handleOpenEditQuestion}
        />
        {
          this.props.currentEditedQuestion
          ? 
            <CurrentEditedQuestionModal
              question={this.props.currentEditedQuestion}
              onCloseCurrentEditedQuestionModal={this.handleCloseCurrentEditedQuestionModal}
              onUpdateCurrentEditedQuestionState={this.handleUpdateCurrentEditedQuestionState}
            />
          :
            false
        }
        {
          this.props.currentGeneratedRevision.questions.length > 0
          ?
            <button className="button button-outline" onClick={(e) => this.saveCurrentRevision(e)}>Create Revision</button>
          :
            <button className="button button-outline disabled">Create Revision</button>
        }

      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(RevisionCreationEditor);