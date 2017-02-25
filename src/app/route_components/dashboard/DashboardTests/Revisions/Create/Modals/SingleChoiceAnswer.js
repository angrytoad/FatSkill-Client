import React from 'react';

const SingleChoiceAnswer = React.createClass({
  
  getInitialState() {
    return({
      answers: this.props.question.answers
    })
  },

  componentDidMount() {
    if(this.state.answers.length === 0){
      this.addAnswer();
    }
  },

  addAnswer() {
    let answers = this.state.answers;
    answers.push({
      text: 'Edit me',
      weight: 100
    });

    this.setState({
      answers
    });
  },

  removeAnswer(index) {
    console.log('removing: '+index);

    let answers = this.state.answers;
    answers.splice(index, 1);

    this.setState({
      answers
    });
  },

  editAnswerText(e, index) {
    let answers = this.state.answers;
    answers[index].text = e.target.value;

    this.setState({
      answers
    });
  },

  editAnswerWeight(e, index) {
    let answers = this.state.answers;
    let weight = parseInt(e.target.value, 10);

    if(e.target.value.length === 0){
      weight = 0;
    }

    if(weight > 100){
      weight = 100;
    }

    if(weight >= 0 && weight <= 100){
      answers[index].weight = weight;
    }



    this.setState({
      answers
    });
  },

  render() {

    let answers = this.state.answers.map((element, index) => {
      return (
        <tr key={index}>
          <td>
            <input type="text" value={element.text} onChange={(e) => this.editAnswerText(e, index)}/>
          </td>
          <td>
            <input type="number" value={element.weight} onChange={(e) => this.editAnswerWeight(e, index)} />
          </td>
          <td>
            <i className="fa fa-trash-o"
               aria-hidden="true"
               onClick={() => this.removeAnswer(index)} />
          </td>
        </tr>
        )
    });

    return (
      <div id="SingleChoiceAnswer">
        <label>Answers:</label>
        <button className="button button-outline" onClick={(e) => this.addAnswer()}>Add answer</button>
        <div className="answer-table-wrapper">
          <div className="answer-table-scroll">
            <table>
              <thead>
              <tr>
                <th>Text</th>
                <th>Weighting</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {answers}
              </tbody>
            </table>
          </div>
        </div>
        <p><i>All answers will be randomised when candidates take the test.</i></p>
      </div>
    )
  }
  
});

export default SingleChoiceAnswer;