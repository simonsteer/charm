import { takeLatest, call } from 'redux-saga/effects'
import { _navigate } from '../navigation/navigationService'

function* navigationSaga(action) {
  yield call(_navigate, action)
}

export default function* watchNavigationSaga() {
  yield takeLatest(action => /^Navigation\//.test(action.type), navigationSaga)
}
