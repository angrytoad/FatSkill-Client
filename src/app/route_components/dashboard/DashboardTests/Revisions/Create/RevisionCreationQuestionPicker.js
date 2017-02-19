import React from 'react';

const RevisionCreationQuestionPicker = React.createClass({

  render() {

    let type_array = {
      'short-text': 0,
      'long-text': 0,
      'single-choice': 0,
      'multiple-choice': 0,
      'boolean': 0,
    };

    this.props.revision.questions.forEach((item, index) => {
      type_array[item.type] += 1;
    });

    let questions = Object.keys(type_array).map((element, index) => {
      switch(element){
        case 'short-text':
          return (
            <div key={index} className="column" onClick={() => this.props.onAddNewQuestion(element, 'Short Text')}>
              <div className="question no-select">
                <p className="title">Short Text ({type_array[element]})</p>
                <p className="description">For short answers that only need 1 or 2 sentences.</p>
                <i className="fa fa-font" aria-hidden="true" />
              </div>
            </div>
          );
        case 'long-text':
          return (
            <div key={index} className="column" onClick={() => this.props.onAddNewQuestion(element, 'Long Text')}>
              <div className="question no-select">
                <p className="title">Long Text ({type_array[element]})</p>
                <p className="description">For longer answers that require additional explanation.</p>
                <i className="fa fa-file-text" aria-hidden="true" />
              </div>
            </div>
          );
        case 'single-choice':
          return (
            <div key={index} className="column" onClick={() => this.props.onAddNewQuestion(element, 'Single Choice')}>
              <div className="question no-select">
                <p className="title">Single Choice ({type_array[element]})</p>
                <p className="description">Offer candidates multiple simple answers.</p>
                <i className="material-icons">radio_button_checked</i>
              </div>
            </div>
          );
        case 'multiple-choice':
          return (
            <div key={index} className="column" onClick={() => this.props.onAddNewQuestion(element, 'Multiple Choice')}>
              <div className="question no-select">
                <p className="title">Multiple Choice ({type_array[element]})</p>
                <p className="description">Same as single choice but you can select more than 1.</p>
                <i className="material-icons">check_box</i>
              </div>
            </div>
          );
        case 'boolean':
          return (
            <div key={index} className="column" onClick={() => this.props.onAddNewQuestion(element, 'Boolean')}>
              <div className="question no-select">
                <p className="title">Boolean ({type_array[element]})</p>
                <p className="description">A simple True or False answer.</p>
                <i className="material-icons rotate-90">share</i>
              </div>
            </div>
          );
        default:
          return (
            <div key={index} className="column">
              <div className="question no-select">
              </div>
            </div>
          );
      }
    });

    return (
      <div id="RevisionCreationQuestionPicker">
        <div className="row">
          {questions}
        </div>
      </div>
    )
  }

});

export default RevisionCreationQuestionPicker;