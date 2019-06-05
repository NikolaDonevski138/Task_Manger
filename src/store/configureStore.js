import { createStore, combineReducers, applyMiddleware } from "redux"
import usersReducer from "../reducers/users" //../reducers/users
import filtersReducer from "../reducers/filters" //../reducers/filters
import boardReducer from "../reducers/board"
import apiCallsReducer from '../reducers/api-calls';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducer, //users:usersReducer
      filters: filtersReducer,
      board: boardReducer,
      apiCalls: apiCallsReducer,
    }),
    composeWithDevTools(
      applyMiddleware(thunk)
    ),
  )
  return store
}
