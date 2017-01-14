import React from 'react';

import DashboardFulfillmentPositionCandidatesRow from './DashboardFulfillmentPositionCandidatesRow';
import DashboardFulfillmentPositionCandidatesFilter from './DashboardFulfillmentPositionCandidatesFilter';

import { emailFilter, nameFilter, addedFilter, completedFilter, scoreFilter } from './filters';

const DashboardFulfillmentPositionCandidates = React.createClass({

  getInitialState() {
    return ({
      filter: "email",
      direction: "ascending",
      filteredCandidates: this.props.candidates
    });
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.candidates){
      this.setState({
        filteredCandidates: nextProps.candidates
      });
    }
  },
  
  /**
   * Allow filtering of candidates table
   * @param filter
   */
  filterNewCandidates(filter, direction){

    let candidates = this.state.filteredCandidates;

    switch(filter){
      case 'email':
        candidates = emailFilter(this.props.candidates);
        break;
      case 'name':
        candidates = nameFilter(this.props.candidates);
        break;
      case 'added':
        candidates = addedFilter(this.props.candidates);
        break;
      case 'completed':
        candidates = completedFilter(this.props.candidates);
        break;
      case 'score':
        candidates = scoreFilter(this.props.candidates);
        break;
      default:
        break;
    }


    if(direction === 'descending'){
      candidates.reverse();
    }

    this.setState({
      filteredCandidates: candidates
    });

  },

  onChangeFilter(filter) {
    this.filterNewCandidates(filter, this.state.direction);
    this.setState({
      filter
    });
  },

  onChangeDirection(direction) {
    this.filterNewCandidates(this.state.filter, direction);
    this.setState({
      direction
    });
  },

  render() {

    let candidates = this.state.filteredCandidates.map((element, index) => {
        return (
          <DashboardFulfillmentPositionCandidatesRow key={index} candidate={element} />
        )
    });
    
    return (
      <div id="DashboardFulfillmentPositionCandidates" className="column">
        <div className="row">
          <DashboardFulfillmentPositionCandidatesFilter
            candidates={this.props.candidates} 
            changeFilter={this.onChangeFilter}
            changeDirection={this.onChangeDirection}
            direction={this.state.direction}
          />
        </div>
        <div className="row">
          <div className="column">
            <table id="FulfillmentDataDisplay">
              <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Added</th>
                <th>Completed</th>
                <th>Score</th>
              </tr>
              </thead>
              <tbody>
              {candidates}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
});

export default DashboardFulfillmentPositionCandidates;