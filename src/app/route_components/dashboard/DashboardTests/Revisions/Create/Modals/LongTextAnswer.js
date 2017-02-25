import React from 'react';

const LongTextAnswer = React.createClass({

  growQuestionAnswer(e) {
    let element = document.querySelector('#LongTextAnswer textarea');
    element.style.height =  "5px";
    element.style.height = (element.scrollHeight)+"px";
  },

  render() {
    return (
      <div id="LongTextAnswer">
        <label>Answer:</label>
        <textarea onKeyUp={(e) => this.growQuestionAnswer(e)} placeholder="Type your answer here" />
      </div>
    )
  }

});

export default LongTextAnswer;