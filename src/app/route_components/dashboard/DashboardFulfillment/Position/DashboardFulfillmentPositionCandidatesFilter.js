import React from 'react';

const DashboardFulfillmentPositionCandidatesFilter = React.createClass({

  changeFilter(e) {
    this.props.changeFilter(e.target.value);
  },

  render() {
    return (
      <div id="DashboardFulfillmentPositionCandidatesFilter" className="column">
        <div className="filter-wrapper">
          <select onChange={(e) => this.changeFilter(e)}>
            <option value="email">Email</option>
            <option value="name">Name</option>
            <option value="added">Added</option>
            <option value="completed">Completed</option>
            <option value="score">Score</option>
          </select>
          {
            this.props.direction === "ascending"
            ?
              <div className="direction-swapper">
                <div className="direction active">
                  <i className="material-icons">keyboard_arrow_up</i>
                </div>
                <div className="direction" onClick={() => this.props.changeDirection("descending")}>
                  <i className="material-icons">keyboard_arrow_down</i>
                </div>
              </div>
            :
              <div className="direction-swapper">
                <div className="direction" onClick={() => this.props.changeDirection("ascending")}>
                  <i className="material-icons">keyboard_arrow_up</i>
                </div>
                <div className="direction active">
                  <i className="material-icons">keyboard_arrow_down</i>
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
  
});

export default DashboardFulfillmentPositionCandidatesFilter;