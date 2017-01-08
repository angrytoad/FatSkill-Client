import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import serialize from 'form-serialize';

import './DatePicker.scss';

import { getRecentPositions, createNewPosition } from '../actions';

import RecentlyCreatedPositions from './RecentlyCreatedPositions';

const mapStateToProps = ({ recentlyCreatedPositions }) =>
  ({
    recentlyCreatedPositions
  });

const mapDispatchToProps = dispatch =>
  ({
    getRecentPositions: () => dispatch(getRecentPositions()),
    createNewPosition: (data) => dispatch(createNewPosition(data))
  });

const DashboardFulfillmentCreate = React.createClass({
  
  componentDidMount() {
    this.props.getRecentPositions(); 
  },

  getInitialState() {
    return ({
      expiryDate: moment()
    })
  },

  handleChangeExpiryDate(date) {
    this.setState({
      expiryDate: date
    });
  },

  handleSubmitNewPositionForm(e) {
    e.preventDefault();
    let form = document.querySelector('#new-position-form');
    let data = serialize(form, { hash:true });
    data.expiry = document.getElementsByClassName('expiry-date')[0].value;
    this.props.createNewPosition(data);
  },
  
  render() {
    
    return (
      <div id="DashboardFulfillmentCreate" className="container dashboard-content">
        <div className="dashboard-header">
          <h1>New Position</h1>
        </div>
        <div className="dashboard-breadcrumbs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/dashboard/fulfillment">
              <li>Jobs Board</li>
            </Link>
            <li>New Position</li>
          </ul>
        </div>
        <div className="dashboard-body">
          <div className="row">
            <div className="column">
              <h5 className="subtitle">New Position</h5>
              <form id="new-position-form" onSubmit={(e) => this.handleSubmitNewPositionForm(e)}>
                <div className="row">
                  <div className="column">
                    <label htmlFor="position">Position</label>
                    <input type="text" autoFocus={true} name="position" placeholder="Position Name e.g. JavaScript Developer" />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label htmlFor="sector">Sector</label>
                    <select name="sector">
                      <option value="Accountancy, banking and finance">Accountancy, banking and finance</option>
                      <option value="Business, consulting and management">Business, consulting and management</option>
                      <option value="Charity and voluntary work">Charity and voluntary work</option>
                      <option value="Creative arts and design">Creative arts and design</option>
                      <option value="Energy and utilities">Energy and utilities</option>
                      <option value="Engineering and manufacturing">Engineering and manufacturing</option>
                      <option value="Environment and agriculture">Environment and agriculture</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Hospitality and events management">Hospitality and events management</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Law">Law</option>
                      <option value="Law enforcement and security">Law enforcement and security</option>
                      <option value="Leisure, sport and tourism">Leisure, sport and tourism</option>
                      <option value="Marketing, advertising and PR">Marketing, advertising and PR</option>
                      <option value="Media and internet">Media and internet</option>
                      <option value="Property and construction">Property and construction</option>
                      <option value="Public services and administration">Public services and administration</option>
                      <option value="Recruitment and HR">Recruitment and HR</option>
                      <option value="Retail">Retail</option>
                      <option value="Sales">Sales</option>
                      <option value="Science and pharmaceuticals">Science and pharmaceuticals</option>
                      <option value="Social care">Social care</option>
                      <option value="Teaching and education">Teaching and education</option>
                      <option value="Transport and logistics">Transport and logistics</option>
                    </select>
                  </div>
                  <div className="column">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" placeholder="Company Name e.g. Fatskill" />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="Location e.g. Nottingham, UK" />
                  </div>
                  <div className="column">
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <DatePicker
                      dateFormat="DD/MM/YYYY"
                      className="expiry-date"
                      todayButton={"Today"}
                      selected={this.state.expiryDate}
                      onChange={this.handleChangeExpiryDate}
                      placeholderText="Expiry date"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <button className="button button-black button-outline">Create Position</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="column">
              <h5 className="subtitle">Recently Created</h5>
              <RecentlyCreatedPositions positions={this.props.recentlyCreatedPositions} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFulfillmentCreate);