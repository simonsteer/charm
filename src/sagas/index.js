import { all } from 'redux-saga/effects'
import watchOnboardSaga from './onboardSaga'
import watchRequestSaga from './requestSaga'

export default function* rootSaga() {
  yield all([watchRequestSaga(), watchOnboardSaga()])
}
