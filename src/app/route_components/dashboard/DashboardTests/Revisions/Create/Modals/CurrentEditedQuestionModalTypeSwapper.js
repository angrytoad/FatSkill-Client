import React from 'react';

import ShortTextAnswer from './ShortTextAnswer';
import LongTextAnswer from './LongTextAnswer';
import SingleChoiceAnswer from './SingleChoiceAnswer';
import MultipleChoiceAnswer from './MultipleChoiceAnswer';
import BooleanAnswer from './BooleanAnswer';

const CurrentEditedQuestionModalTypeSwapper = React.createClass({

  render() {
    
    let swapper = <div></div>;
    
    switch(this.props.question.type){
      case 'short-text':
        swapper = <ShortTextAnswer question={this.props.question} />;
        break;
      case 'long-text':
        swapper = <LongTextAnswer question={this.props.question} />;
        break;
      case 'single-choice':
        swapper = <SingleChoiceAnswer question={this.props.question} onUpdateQuestionAnswers={this.props.onUpdateQuestionAnswers} />;
        break;
      case 'multiple-choice':
        swapper = <MultipleChoiceAnswer question={this.props.question} onUpdateQuestionAnswers={this.props.onUpdateQuestionAnswers} />;
        break;
      case 'boolean':
        swapper = <BooleanAnswer question={this.props.question} />;
        break;
      default:
        break;
    }
    
    return (
      <div id="CurrentEditedQuestionModalTypeSwapper" className="column">
        {swapper}
      </div>
    )
  }

});

export default CurrentEditedQuestionModalTypeSwapper;