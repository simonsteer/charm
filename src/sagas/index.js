import { all } from 'redux-saga/effects'
import watchOnboardSaga from './onboardSaga'

export default function* rootSaga() {
  yield all([watchOnboardSaga()])
}
