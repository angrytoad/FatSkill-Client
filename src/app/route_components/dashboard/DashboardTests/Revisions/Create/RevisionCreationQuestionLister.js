/* eslint-disable */
import React from 'react';

const RevisionCreationQuestionLister = React.createClass({

  mapNewQuestionOrder() {
    let currentMapping = [];
    let rows = document.querySelectorAll('#RevisionCreationQuestionLister tbody tr');
    for(let i=0; i<rows.length; i++){
      let row = rows[i];
      let id = row.dataset.id;
      currentMapping.push(id);
    }
    this.props.onUpdateQuestionOrdering(currentMapping, this.props.revision.questions);
  },

  render() {

    let questions = this.props.revision.questions.map((element, index) => {
        return (
          <tr key={index} className="no-select" data-id={element.id}>
            <td className="mover"><i className="fa fa-arrows" aria-hidden="true" /></td>
            <td className="title" onClick={() => this.props.onOpenEditQuestion(element)}>{element.name}</td>
            <td>{element.description}</td>
            <td className="type">
              {element.formattedType}
              &nbsp;
              {
                element.type === 'single-choice' || element.type === 'multiple-choice'
                ?
                  <span>
                    ({element.answers.length})
                  </span>
                :
                  false
              }
            </td>
            <td>
              <i className="fa fa-trash-o" 
              aria-hidden="true" 
              onClick={() => this.props.onRemoveQuestion(element.id)} />
            </td>
          </tr>
          )
    })

    return (
      <div id="RevisionCreationQuestionLister" className="no-select">
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody ref={this.dragulaDecorator}>
            {questions}
          </tbody>
        </table>
      </div>
    )
  },

  dragulaDecorator(componentBackingInstance) {
    if(componentBackingInstance){
      let options = {
        moves: (el, container, handle) => {
          return handle.classList.contains('fa-arrows');
        },
      };
      let drake = dragula([componentBackingInstance], options);
      drake.on('drop', (el, target, source, sibling) => {
        this.mapNewQuestionOrder();
        drake.cancel(true);
      })
    }
  }

});

export default RevisionCreationQuestionLister;