import { take, takeLatest, put, call } from 'redux-saga/effects'

function* onboardSaga(action) {
  const responseAction = yield take([
    'ONBOARD_SIGNUP_REQUEST_SUCCESS',
    'ONBOARD_SIGNUP_REQUEST_FAILURE',
  ])

  console.log(responseAction)

  if (/_FAILURE$/.test(responseAction.type)) {
    return
  }
}

export default function* watchOnboardSaga() {
  yield takeLatest('ONBOARD_SIGNUP_REQUEST', onboardSaga)
}
