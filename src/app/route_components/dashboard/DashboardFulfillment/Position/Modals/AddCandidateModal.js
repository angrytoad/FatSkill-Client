import React from 'react';
import {connect} from 'react-redux';
import JsSearch from 'js-search';
import serialize from 'form-serialize';

import { getBasicCandidateList } from '../../../DashboardCandidates/actions';
import { addCandidate, createAndAddCandidate } from '../../actions';

const mapStateToProps = ({ basicCandidateList, addPositionCandidateModal }) =>
  ({
    basicCandidateList,
    addPositionCandidateModal
  });

const mapDispatchToProps = dispatch =>
  ({
    getBasicCandidateList: () => dispatch(getBasicCandidateList()),
    addCandidate: (position, candidate_id) => dispatch(addCandidate(position, candidate_id)),
    createAndAddCandidate: (position, candidate_email) => dispatch(createAndAddCandidate(position, candidate_email))
  });

const AddCandidateModal = React.createClass({

  JsSearch: new JsSearch.Search('isbn'),

  getInitialState() {
    return ({
      candidates: this.props.basicCandidateList
    });
  },

  componentDidMount() {
    document.getElementById('AddCandidateModal').addEventListener('click', this.modalClick);
    
    this.props.getBasicCandidateList();
  },

  componentWillUnmount() {
    document.getElementById('AddCandidateModal').removeEventListener('click', this.modalClick);
  },

  componentWillReceiveProps(nextProps){
    this.JsSearch = new JsSearch.Search('isbn');
    this.JsSearch.addIndex('name');
    this.JsSearch.addIndex('email');
    this.JsSearch.addIndex('location');
    this.JsSearch.addDocuments(nextProps.basicCandidateList);
    this.setState({
      candidates: nextProps.basicCandidateList
    })
  },

  modalClick(e){
    if(e.target.id === "AddCandidateModal"){
      this.props.closeAddCandidateModal()
    }
  },

  searchCandidates(e){
    if(e.target.value.length > 0){
      let results = this.JsSearch.search(e.target.value);
      this.setState({
        candidates: results
      });
    }else{
      this.setState({
        candidates: this.props.basicCandidateList
      });
    }
  },

  handleCreateAndAddCandidate(e){
    e.preventDefault();
    let form = document.querySelector('#create-and-add-candidate-form');
    let data = serialize(form, { hash: true });
    if(typeof data.candidate !== 'undefined'){
      this.props.createAndAddCandidate(this.props.position.id, data.candidate);
    }
  },

  handleAddCandidate(e) {
    e.preventDefault();
    let form = document.querySelector('#add-candidate-form');
    let data = serialize(form, { hash: true });
    if(typeof data.candidate !== 'undefined'){
      this.props.addCandidate(this.props.position.id, data.candidate);
    }
  },

  render() {
    
    let candidates = this.state.candidates.map((element, index) => {
        return (
            <option key={index} value={element.id}>
              {element.email}
              {
                element.name
                ?
                  "("+element.name+")"
                :
                  false
              }
            </option>
          );
    });
    
    return (
      <div id="AddCandidateModal" className="modal animated fadeIn fast">
        <div className="modal-main">
          <i className="modal-close material-icons no-select" onClick={() => this.props.closeAddCandidateModal()}>exit_to_app</i>
          <div className="row">
            <div className="column">
              <h5>Assign a candidate to <span className="fatskill">{this.props.position.position}</span></h5>
            </div>
          </div>
          {
            this.props.addPositionCandidateModal.errors.length > 0
              ?
              <blockquote className="warning">
                <h5>Oops!</h5>
                <p>
                  <strong>{ this.props.addPositionCandidateModal.errors[0] }</strong>
                </p>
              </blockquote>
              :
              false
          }
          <div className="row">
            <div className="column">
              <p>Select from your current candidates</p>
              <form id="add-candidate-form" onSubmit={(e) => this.searchCandidates(e)}>
                <div className="row">
                    <div className="column">
                      <input
                        type="text"
                        autoFocus={true}
                        placeholder="Search by name, email or location."
                        onChange={(e) => this.searchCandidates(e)}
                      />
                    </div>
                    <div className="column">
                      <select id="add-candidate-select" name="candidate" className="column">
                        {candidates}
                      </select>
                    </div>
                    <div className="column">
                      <button className="button button-black button-outline" onClick={(e) => this.handleAddCandidate(e)}>Add Candidate</button>
                    </div>
                </div>
              </form>
              <p>...or quick create a candidate</p>
              <form id="create-and-add-candidate-form" onSubmit={(e) => this.handleCreateAndAddCandidate(e)}>
                <div className="row">
                    <div className="column">
                      <input
                        id="add-candidate-email"
                        type="text"
                        placeholder="Type candidates email."
                        name="candidate"
                      />

                    </div>
                    <div className="column">
                      <button className="button button-black button-outline" >Create & Add</button>
                    </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidateModal);