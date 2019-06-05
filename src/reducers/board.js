import { combineReducers } from "redux"
const boardReducerDefaultState = []

const boardReducer = (state = boardReducerDefaultState, action) => {
  switch (action.type) {
    case "CARD":
      return [...state, action.user]
    default:
      return state
  }
}

export default combineReducers({
  board: boardReducer
})
