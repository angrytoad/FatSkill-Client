import React from 'react';

const ShortTextAnswer = React.createClass({
  
  render() {
    return (
      <div id="ShortTextAnswer">
        <label>Answer:</label>
        <input placeholder="Type your answer here" type="text" />
      </div>
    )
  }
  
});

export default ShortTextAnswer;