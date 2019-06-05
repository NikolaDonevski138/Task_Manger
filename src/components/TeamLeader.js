import React from "react"
import Board from "react-trello"
import PieChart from "react-minimal-pie-chart"
import { dodavanjeNaProekt } from "../actions/board"
import { connect } from "react-redux"
const data = {
  lanes: [
    {
      id: "lane1",
      title: "To Do",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Api Povrzuvanje",
          description: "Da se povrzi so api",
          label: "30 mins"
        },
        {
          id: "Card2",
          title: "Piechart",
          description: "Piechart",
          label: "5 mins",
          metadata: { sha: "be312a1" }
        }
      ]
    },
    {
      id: "lane2",
      title: "Doing",
      label: "0/0",
      cards: []
    },
    {
      id: "lane3",
      title: "Done",
      label: "0/0",
      cards: []
    }
  ]
}

class Statusi extends React.Component {
  renderList = () => {
    return this.props.board.map(boardcard => {
      return boardcard
    })
  }
  render() {
    console.log("proekti", this.props.board)
    return (
      <div>
        <Board data={this.renderList()} editable={true} draggable={true}>
          {/* {props.children} */}
        </Board>
      </div>
    )
  }
}

const Forma = () => {
  return (
    <div>
      <form style={{ background: "red" }}>
        <label>Prebaruvanje na Taskovi</label>
        <input type="text" />
      </form>
    </div>
  )
}

// const stylesZaPiechart = {
//   backgroundColor: "blue",
//   padding: "-200%",
//   margin: "-200%",
//   display: "flex",
//   "align-items": "center",
//   "justify-content": "center"
// }
// let mapiraniEl = data.lanes.title.map((el,num) => {
//   return num
// })
// console.log(mapiraniEl)
let todo = data.lanes[0].cards.length
let doing = data.lanes[1].cards.length
let done = data.lanes[2].cards.length
const Piechart = () => {
  return (
    <div>
      <PieChart
        data={[
          { title: "To Do", value: todo, color: "#E38627" },
          { title: "Doing", value: doing, color: "#C13C37" },
          { title: "Done", value: done, color: "#6A2135" }
        ]}
        radius="5"
      />
    </div>
  )
}
const TeamLeader = () => {
  return (
    <div>
      <Forma />
      <Statusi />
      <Piechart />
    </div>
  )
}
const mapStateToProps = state => {
  return { board: state.board } //users: selectUsers(state.users,state.filters)
}

export default connect(mapStateToProps)(TeamLeader) //(UserList)
