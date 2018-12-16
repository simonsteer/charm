import { combineReducers } from 'redux'
import navigation from './navigation'
import overlay from './overlay'
import users from './users'
import session from './session'

const appReducer = combineReducers({
  navigation,
  overlay,
  session,
  users,
})

export default appReducer
