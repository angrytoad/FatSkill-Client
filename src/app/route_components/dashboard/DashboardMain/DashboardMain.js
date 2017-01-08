import React from 'react';
import {connect} from 'react-redux';
import { Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import moment from 'moment';

import { getUserInformation } from '../actions';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({
    getUserInformation: () => dispatch(getUserInformation())
  });

const DashboardMain = React.createClass({

  componentWillMount() {
    this.props.getUserInformation();
  },

  render() {

    let data = [
      {name:'Response Rate', value:75, fill:'#E42960'},
      { value:25, fill:'#D8D8D8'},
    ];

    let completionData = [
      {name:'Completion', value:84, fill:'#77B786'},
      { value:16, fill:'#D8D8D8'},
    ];

    return (
      <div id="DashboardMain" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome to your dashboard</h1>
        </div>
        <div className="row">
          <div className="column">
            <h5>My Summary <small><strong>({moment().subtract(7,'days').format('MMM Do')} - {moment().format('MMM Do')})</strong></small></h5>
            <p>
              In the past 7 days, <strong>75% of Candidates</strong> have been tested with an average test score
              of <strong>84%</strong> across all tests <strong>(7 total)</strong>.
            </p>
            <p>
              Relative to the 7 days prior ({moment().subtract(14,'days').format('MMM Do')} - {moment().subtract(7,'days').format('MMM Do')}), you've seen an increase in candidates tested by <strong>+17%</strong>.
            </p>
            <p>
              Compared to other users Fatskill users, you are testing <strong>8% less</strong> candidates so far this week.
            </p>
          </div>
          <div className="column" id="dashboard-graph">
            <ResponsiveContainer>
              <PieChart>
                <text x="50%" y="50%" width="100" textAnchor="middle" fontSize="4.5rem">
                  <tspan x="50%" textAnchor="middle">90/120</tspan>
                  <tspan x="50%" textAnchor="middle" dy="2rem" fontSize="2rem">Candidates Tested</tspan>
                  <tspan x="50%" textAnchor="middle" dy="6rem" fontSize="2rem">{moment().subtract(7,'days').format('MMM Do')} - {moment().format('MMM Do')}</tspan>
                </text>
                <Pie
                  isAnimationActive={false}
                  startAngle={200}
                  endAngle={-20}
                  clockwise={true}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="68%"
                  outerRadius="88%"
                  fill="#82ca9d"
                  paddingAngle={0}
                />
                <Pie
                  isAnimationActive={false}
                  startAngle={200}
                  endAngle={-20}
                  clockwise={true}
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  innerRadius="90%"
                  outerRadius="100%"
                  fill="#82ca9d"
                  paddingAngle={0}
                />
                <Legend
                  layout="horizontal"
                  payload={[
                    { value:'Response Rate', color:'#E42960' },
                    { value:'Average Score', color:'#77B786' }
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);