import React from 'react';
import {connect} from 'react-redux';
import serialize from 'form-serialize'; 

import { setInitialRevisionData } from './actions';

const mapStateToProps = ({ currentGeneratedRevision }) =>
  ({
    currentGeneratedRevision
  });

const mapDispatchToProps = dispatch =>
  ({
    setInitialRevisionData: (data) => dispatch(setInitialRevisionData(data))
  });

const RevisionCreationIntro = React.createClass({

  getInitialState() {
    return({
      descriptionWords: 0
    });
  },

  handleUpdateDescriptionWords(e) {
    let string = e.target.value;
    let count = string.split(' ').length-1;
    this.setState({
      descriptionWords: count
    });
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

  handleProcessCreationForm(e) {
    e.preventDefault();
    let form = document.querySelector('#create-revision-form');
    let data = serialize(form, { hash:true });
    if(typeof data.name !== 'undefined' && typeof data.description !== 'undefined'){
      this.props.setInitialRevisionData(data);
    }
  },

  render() {
    return (
      <div id="RevisionCreationIntro">
        <div className="row">
          <div className="column">
            <form id="create-revision-form" onSubmit={this.handleProcessCreationForm}>
              <div>
                <label htmlFor="name">
                  <div>
                    <i className="material-icons" data-help="title-help" onMouseOver={this.handleShowHelp} onMouseLeave={this.handleHideHelp}>help</i>
                    <div id="title-help" className="input-help">
                      <p>Your revision title is what you will primarily use to identify which version of the test candidates have answered.</p>
                    </div>
                  </div>

                  Title
                </label>
                <input name="name" type="text" autoFocus={true} />
              </div>
              <div>
                <label htmlFor="name">
                  <div>
                    <i className="material-icons" data-help="description-help" onMouseOver={this.handleShowHelp} onMouseLeave={this.handleHideHelp}>help</i>
                    <div id="description-help" className="input-help">
                      <p>
                        Your revision description should briefly mention what notable changes this revision has compared to others in the same test. For example
                        you might want to note any additional questions you are adding.
                      </p>
                    </div>
                  </div>
                  Description ({this.state.descriptionWords} words)
                </label>
                <textarea name="description" onChange={this.handleUpdateDescriptionWords}/>
              </div>
              <div>
                <button className="button button-black button-outline">Create Test</button>
              </div>
            </form>
          </div>
          <div id="helpful-tips" className="column">
            <h5>Helpful Tips:</h5>
            <blockquote>
              When choosing a title, make sure you name your revision so you can easily identify it, if this is your first
              revision, you might want to enter something like <span className="fatskill">"Version 1"</span> or <span className="fatskill">"First Revision".</span>
            </blockquote>
            <blockquote>
              When entering a description, try to describe any major changes if you are creating additional revisions. If
              this is your first revision, you can simply type something like <span className="fatskill">"The first revision for {this.props.name}".</span>
            </blockquote>
          </div>
        </div>

      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(RevisionCreationIntro);