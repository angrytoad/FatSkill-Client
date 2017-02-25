import React from 'react';

import CurrentEditedQuestionModalTypeSwapper from './CurrentEditedQuestionModalTypeSwapper';

const CurrentEditedQuesitonModal = React.createClass({

  componentDidMount() {
    document.getElementById('CurrentEditedQuestionModal').addEventListener('click', this.modalClick);
  },
  
  componentWillUnmount() {
    this.props.onCloseCurrentEditedQuestionModal();
    document.getElementById('CurrentEditedQuestionModal').removeEventListener('click', this.modalClick);
  },

  modalClick(e) {
    if(e.target.id === "CurrentEditedQuestionModal"){
      this.props.onCloseCurrentEditedQuestionModal();
    }
  },

  updateQuestionName(e) {
    let question = this.props.question;
    question.name = e.target.value;
    this.props.onUpdateCurrentEditedQuestionState(question);
  },

  updateQuestionDescription(e) {
    let question = this.props.question;
    question.description = e.target.value;
    this.props.onUpdateCurrentEditedQuestionState(question);
  },

  growQuestionTitle(e) {
    let element = document.getElementById('edited-question-title');
    element.style.height =  "5px";
    element.style.height = (element.scrollHeight)+"px";
  },

  growQuestionDescription(e) {
    let element = document.getElementById('edited-question-description');
    element.style.height =  "5px";
    element.style.height = (element.scrollHeight)+"px";
  },

  handleUpdateQuestionAnswers(answers) {
    let question = this.props.question;
    question.answers = answers;
    this.props.onUpdateCurrentEditedQuestionState(question);
  },

  render() {
    return (
      <div id="CurrentEditedQuestionModal" className="modal animated fadeIn fast">
        <div className="modal-main">
          <i className="modal-close material-icons no-select" onClick={() => this.props.onCloseCurrentEditedQuestionModal()}>exit_to_app</i>
          <div className="row">
            <div className="column">
              <label>Title:</label>
              <textarea
                id="edited-question-title"
                className="hidden-input"
                type="text"
                defaultValue={this.props.question.name}
                onChange={(e) => this.updateQuestionName(e)}
                onKeyUp={(e) => this.growQuestionTitle(e)}
                placeholder="Enter your question title"
                autoFocus={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Description:</label>
              <textarea
                id="edited-question-description"
                className="hidden-input"
                defaultValue={this.props.question.description}
                onChange={(e) => this.updateQuestionDescription(e)}
                onKeyUp={(e) => this.growQuestionDescription(e)}
                placeholder="Enter your question description"
              />
            </div>
          </div>
          <div className="row">
            <CurrentEditedQuestionModalTypeSwapper 
              question={this.props.question}
              onUpdateQuestionAnswers={this.handleUpdateQuestionAnswers}
            />
          </div>
        </div>
      </div>
    )
  }

});

export default CurrentEditedQuesitonModal;