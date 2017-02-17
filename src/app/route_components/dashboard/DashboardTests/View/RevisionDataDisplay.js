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
        <table id="RevisionDataDisplay">
          <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      )
    }

  }
  
});

export default RevisionDataDisplay;