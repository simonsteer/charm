import { all } from 'redux-saga/effects'
import watchSignupSaga from './signupSaga'
import watchRequestSaga from './requestSaga'
import watchLoginSaga from './loginSaga'

export default function* rootSaga() {
  yield all([watchRequestSaga(), watchSignupSaga(), watchLoginSaga()])
}
