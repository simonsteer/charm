import { take, takeLatest, put, call, select } from 'redux-saga/effects'
import { userLoginRequest } from '../actions/user'
import {
  openLoadingIndicator,
  closeLoadingIndicator,
} from '../actions/navigation'

function* signupSaga(action) {
  yield put(openLoadingIndicator())

  const signupResponseAction = yield take(action =>
    /^USER_SIGNUP_REQUEST_/.test(action.type)
  )

  if (/FAILURE$/.test(signupResponseAction.type)) {
    yield put(closeLoadingIndicator({ success: false, text: 'signup failed' }))
    return
  }

  const {
    payload: {
      body: { email, password },
    },
  } = action

  yield put(userLoginRequest({ email, password }))
}

export default function* watchSignupSaga() {
  yield takeLatest('USER_SIGNUP_REQUEST', signupSaga)
}
