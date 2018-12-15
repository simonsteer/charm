import { take, takeEvery, put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { ONBOARD_ACTION_TYPES } from '../actions/onboarding'

function* onboardSaga() {
  yield delay(1000)
  yield call(console.log, 'onboard saga triggered')
}

function* watchOnboardSaga() {
  yield takeEvery(ONBOARD_ACTION_TYPES.ONBOARD_SIGNUP_REQUEST, onboardSaga)
}

export default watchOnboardSaga
