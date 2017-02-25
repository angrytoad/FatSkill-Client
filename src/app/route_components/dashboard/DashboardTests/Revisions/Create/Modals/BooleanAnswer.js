import React from 'react';

const BooleanAnswer = React.createClass({

  getInitialState() {
    return({
      answers: this.props.question.answers
    })
  },

  swapWeighting() {
    let answers = this.state.answers;
    if(answers[0].weight === 100){
      answers[0].weight = 0;
      answers[1].weight = 100;
    }else{
      answers[1].weight = 0;
      answers[0].weight = 100;
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
            <input disabled={true} type="text" value={element.text}/>
          </td>
          <td>
            <input disabled={true} type="number" value={element.weight} />
          </td>
        </tr>
      )
    });

    return (
      <div id="BooleanAnswer">
        <label>Answers:</label>
        <button className="button button-outline" onClick={() => this.swapWeighting()}>Swap weighting</button>
        <div className="answer-table-wrapper">
          <div className="answer-table-scroll">
            <table>
              <thead>
              <tr>
                <th>Text</th>
                <th>Weighting</th>
              </tr>
              </thead>
              <tbody>
              {answers}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

});

export default BooleanAnswer;