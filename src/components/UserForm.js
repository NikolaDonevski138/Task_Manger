import React from "react"
import moment from "moment"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

export default class UserForm extends React.Component {
  //UserForm
  constructor(props) {
    super(props)

    this.state = {
      ime: props.user ? props.user.ime : "", //description: props.user ? props.user.description
      prezime: props.user ? props.user.prezime : "",
      oddel: props.user ? props.user.oddel : "",
      note: props.user ? props.user.note : "", //props.user ? props.user.note
      amount: props.user ? (props.user.amount / 100).toString() : "", //props.user ? (props.user.amount/100).toString() : '';
      createdAt: props.user ? moment(props.user.createdAt) : moment(), //props.user ? moment(props.user.createdAt) : moment().
      calendarFocused: false,
      error: "",
      email: props.user ? props.user.email : "",
      proekt: props.user ? props.user.proekt : "" //props.user ? props.user.email
    }
  }
  onProektChange = e => {
    const proekt = e.target.value
    this.setState(() => ({ proekt }))
  }

  onImeChange = e => {
    const ime = e.target.value
    this.setState(() => ({ ime }))
  }
  onPrezimeChange = e => {
    const prezime = e.target.value
    this.setState(() => ({ prezime }))
  }
  onOddelChange = e => {
    const oddel = e.target.value
    if (e.target.value === "Team Member") {
      this.setState(() => ({ oddel }))
    } else if (e.target.value === "Team Leader") {
      this.setState(() => ({ oddel }))
    } else if (e.target.value === "Team Manager") {
      this.setState(() => ({ oddel }))
    }
  }

  onEmailChange = e => {
    const email = e.target.value
    console.log(email)
    if (!email || email.match()) this.setState(() => ({ email }))
  }

  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onAmountChange = e => {
    const amount = e.target.value

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = e => {
    e.preventDefault()

    if (
      !this.state.ime ||
      !this.state.prezime ||
      !this.state.oddel ||
      !this.state.proekt
      //||
      //!this.state.amount
    ) {
      this.setState(() => ({ error: "Please provide User Information" }))
    } else {
      this.setState(() => ({ error: "" }))
      this.props.onSubmit({
        ime: this.state.ime,
        prezime: this.state.prezime,
        oddel: this.state.oddel,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        email: this.state.email,
        proekt: this.state.proekt
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <input
          type="text"
          placeholder="Enter Name for User"
          autoFocus
          className="text-input"
          value={this.state.ime}
          onChange={this.onImeChange}
        />
        <input
          type="text"
          placeholder="Enter Surname for User"
          autoFocus
          className="text-input"
          value={this.state.prezime}
          onChange={this.onPrezimeChange}
        />
        <select className="select" onChange={this.onOddelChange}>
          <option value="" disabled selected>
            Oddel
          </option>

          <option value="Team Member">Team Member</option>
          <option value="Team Leader">Team Leader</option>
          <option value="Team Manager">Team Manager</option>
        </select>
        <input
          type="text"
          placeholder="proekt"
          autoFocus
          className="text-input"
          value={this.state.proekt}
          onChange={this.onProektChange}
        />
        <input
          type="email"
          placeholder="Email"
          autoFocus
          className="text-input"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        {/* <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        /> */}
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for User (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Add User</button>
        </div>
      </form>
    )
  }
}
