import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectUsers from '../selectors/users' //../selectors/users
import selectUsersTotal from '../selectors/users-total' //../selectors/users-total

export const UsersSummary = ({ userCount, usersTotal }) => {
  // export const UsersSummary = ({userCount,usersTotal})
  const userWord = userCount === 1 ? 'user' : 'users' //userWord user :'users'
  const formattedUsersTotal = numeral(usersTotal / 100).format('$0,0.00') //formattedUsersTotal = numeral(usersTotal)

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{userCount}</span> {userWord} totalling{' '}
          <span>{formattedUsersTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add User
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = selectUsers(state.users, state.filters) //selectUsers(state.users,state.filters)

  return {
    userCount: visibleUsers.length, //userCount :visibleUsers.length
    usersTotal: selectExpensesTotal(visibleUsers) // userTotal:selectUsersTotal(visibleUsers)
  }
}
