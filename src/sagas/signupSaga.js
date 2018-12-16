import { take, takeLatest, put, call, select } from 'redux-saga/effects'
import { userLoginRequest } from '../actions/user'

function* signupSaga(action) {
  const signupResponseAction = yield take(action =>
    /^USER_SIGNUP_REQUEST_/.test(action.type)
  )

  if (/FAILURE$/.test(signupResponseAction.type)) {
    return
  }

  const {
    payload: { email, password },
  } = action

  yield put(userLoginRequest({ email, password }))
}

export default function* watchSignupSaga() {
  yield takeLatest('USER_SIGNUP_REQUEST', signupSaga)
}
