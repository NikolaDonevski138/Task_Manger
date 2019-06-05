import React, { Component } from 'react'
import UserList from './UserList'
import UserListFilters from './UserListFilters'
import { connect } from "react-redux"
import apiCall from '../api/apiCall';
import Loader from 'react-loader-spinner'
import selectUsers from "../selectors/users" 
import apiCallStarted from '../api/api-call-started';

class UserDashboardPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(
      apiCall(
        this.props.dispatch,
        'allEmployees',
        {},
        ''
      )
    );
  }

  render() {
    console.log('SOMETHING', this.props.state);
    // let userList = (
    //   <UserList allEmployees={this.props.allEmployees} />
    // );

    // if (this.props.allEmployees.length < 1) {
    //   userList = (
    //     <Loader type="Audio" color="#00BFFF" height="100" width="100" />   
    //   )
    // }

    return (
      <div>
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Users</h1>
            </div>
          </div>
        </div>
        <UserListFilters />
        <UserList allEmployees={this.props.apiCalls} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apiCalls: state.apiCalls && state.apiCalls.allEmployees && state.apiCalls.allEmployees.data ? state.apiCalls.allEmployees.data : '',
});

export default connect(mapStateToProps)(UserDashboardPage);
