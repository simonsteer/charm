import { combineReducers } from 'redux'
// import navigation from './navigation'
import users from './users'
import session from './session'

const appReducer = combineReducers({
  // navigation,
  session,
  users,
})

export default appReducer
