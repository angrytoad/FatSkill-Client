import React from 'react';
import { Link } from 'react-router';

import RevisionDataDisplayRow from './RevisionDataDisplayRow';

const RevisionDataDisplay = React.createClass({
  
  render() {

    let rows = this.props.test.revisions.map((element, index) => {
      return <RevisionDataDisplayRow key={index} row={element} test={this.props.test}/>
    });
  
    
    if(this.props.test.revisions.length === 0){
      return (
        <div id="RevisionDataDisplay" className="column">
          <p>You haven't got any revisions yet, create your first revision <Link to={"/dashboard/tests/view/"+this.props.test.id+"/revision/new"}>here.</Link></p>
        </div>
      )
    }else{
      return (
        <div className="column"> 
          <div className="row">
            <div className="column">
              <Link to={"/dashboard/tests/view/"+this.props.test.id+"/revision/new"}>
                <button className="button button-outline">Create a new revision</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <table id="RevisionDataDisplay">
                <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Created</th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }

  }
  
});

export default RevisionDataDisplay;