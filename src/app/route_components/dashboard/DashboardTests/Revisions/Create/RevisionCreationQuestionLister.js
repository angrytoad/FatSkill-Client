import React from 'react';
import Dragula from 'react-dragula';

const RevisionCreationQuestionLister = React.createClass({

  render() {

    let questions = this.props.revision.questions.map((element, index) => {
        return (
          <tr key={index} className="no-select" data-id={element.id}>
            <td className="mover"><i className="fa fa-arrows" aria-hidden="true" /></td>
            <td className="title">{element.name}</td>
            <td>{element.description}</td>
            <td>{element.formattedType}</td>
            <td>
              <i className="fa fa-trash-o" 
              aria-hidden="true" 
              onClick={() => this.props.onRemoveQuestion(element.id)} />
            </td>
          </tr>
          )
    })

    return (
      <div id="RevisionCreationQuestionLister">
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
      Dragula([componentBackingInstance], options);
    }
  }

});

export default RevisionCreationQuestionLister;