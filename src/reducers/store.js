import { createStore, applyMiddleware } from 'redux'
import appReducer from '.'

const store = createStore(appReducer, applyMiddleware())

export default store
