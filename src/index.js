import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import configureStore from './store/configureStore'
import { addUser } from './actions/users' //{addUser} from './action/users
import { setTextFilter } from './actions/filters'
import getVisibleUsers from './selectors/users' //getVisibleUsers from './selectors/users
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'tachyons'

const store = configureStore()

console.log(store.getState())
const jsx = (
  <Provider store={store}>
    <AppRouter state={store.getState()} />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
