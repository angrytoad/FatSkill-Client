import React from 'react';

const RevisionCreationSummary = React.createClass({

  getInitialState() {
    return({
      variation_score: "N/A"
    });
  },

  componentWillReceiveProps(nextProps){
    if(nextProps.revision){
      let type_array = [];
      nextProps.revision.questions.forEach((item, index) => {
        if(!(item in type_array)){
          type_array.push(item);
        }
      });

      if(type_array.length <= 1){
        this.setState({
          variation_score: "Poor"
        });
      }else if(type_array.length <= 4){
        this.setState({
          variation_score: "Average"
        });
      }else{
        this.setState({
          variation_score: "Good"
        })
      }
    }
  },

  handleShowHelp(e) {
    let type = e.target.dataset.help;
    let element = document.getElementById(type);
    element.classList.add('show');
  },

  handleHideHelp(e) {
    let type = e.target.dataset.help;
    let element = document.getElementById(type);
    element.classList.remove('show');
  },

  render() {
    return (
      <div id="RevisionCreationSummary">
        <div className="row">
          <div className="column column-center">
            <div>
              <p><strong>Name:</strong> {this.props.revision.name}</p>
            </div>
            <div>
              <p><strong>Description:</strong> {this.props.revision.description}</p>
            </div>
          </div>
          <div className="column column-center">
            <div>
              <p><strong>Questions:</strong> {this.props.revision.questions.length}</p>
            </div>
            <div>
              <p>
                <label>
                  <strong>Variation Score:</strong> {this.state.variation_score}
                  <i className="material-icons" data-help="description-help" onMouseOver={this.handleShowHelp} onMouseLeave={this.handleHideHelp}>help</i>
                  <span id="description-help" className="input-help">
                    <span>
                      Your variation score lets you know if you are giving candidates a wide variety of question types, statistics
                      show that candidates are more fairly tested when exposed to a wider range of question types.
                    </span>
                  </span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default RevisionCreationSummary;