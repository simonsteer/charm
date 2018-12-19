import { all } from 'redux-saga/effects'
import watchRequestSaga from './requestSaga'
import watchNavigationSaga from './navigationSaga'
import watchSignupSaga from './signupSaga'
import watchLoginSaga from './loginSaga'

export default function* rootSaga() {
  yield all([
    watchRequestSaga(),
    watchNavigationSaga(),
    watchSignupSaga(),
    watchLoginSaga(),
  ])
}
