import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import appReducer from '.'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(appReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store
