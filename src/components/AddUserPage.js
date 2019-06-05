import React from "react"
import { connect } from "react-redux"
import UserForm from "./UserForm" //UserForm from ./UserForm
import { addUser } from "../actions/users" //{addUser} from ../actions/Users;
import { dodavanjeNaProekt } from "../actions/board"
const AddUserPage = props => (
  <div>
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add User</h1>
        </div>
      </div>
    </div>
    <div className="content-container">
      <UserForm
        onSubmit={user => {
          props.dispatch(dodavanjeNaProekt(user))
          props.dispatch(addUser(user)) //addUser(user)
          props.history.push("/UserDashboardPage")
          props.history.push("/teamleader")
        }}
      />
    </div>
  </div>
)

export default connect()(AddUserPage, dodavanjeNaProekt) //AddUserPage
