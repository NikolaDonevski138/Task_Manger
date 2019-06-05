import React, { Component } from "react"
import { connect } from "react-redux"
import UserListItem from "./UserListItem" //UserListItem from ./UserListItem
import selectUsers from "../selectors/users" //selectUsers from '../selectors/users
import Loader from 'react-loader-spinner'
import { compose } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux";

class UserList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('UPDATED');
  }

  render() {
    console.log('PROPS', this.props.apiCalls);
    let userList = '';

    if (this.props.apiCalls === '') {
      userList = (
        <div className="list-item list-item--message">
          <span>No users</span>
        </div>
      );
    } else {
      userList = (
          this.props.apiCalls.map(employee => {
            //props.users.map((user))
            return <UserListItem key={employee.id_vraboten} {...employee} /> //UserListItem key={user.id} {...user}
          }
      )
    )}

    let body = (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-desktop">Users info</div>
        </div>
        <div className="list-body">
          {userList}
        </div>
      </div>
    );

    // if (this.props.apiCalls.length < 1) {
    //   body = (
    //     <div className="content-container">
    //       <div className="center-loader">
    //         <Loader type="Audio" color="#00BFFF" height="100" width="100" />
    //       </div>
    //     </div>
    //   );
    // }

    return (
      body
    )
      
  }

}

const mapStateToProps = state => ({
  apiCalls: state.apiCalls && state.apiCalls.allEmployees && state.apiCalls.allEmployees.data ? state.apiCalls.allEmployees.data : '', //users: selectUsers(state.users,state.filters)
})

export default connect(mapStateToProps)(UserList) //(UserList)
