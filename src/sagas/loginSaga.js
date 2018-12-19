import { take, takeLatest, put, select } from 'redux-saga/effects'
import get from 'lodash/get'
import { fetchCurrentUser } from '../actions/user'
import { getCurrentUser } from '../selectors/user'
import { getLoadingIndicator } from '../selectors/navigation'
import {
  openLoadingIndicator,
  closeLoadingIndicator,
} from '../actions/navigation'

function* loginSaga(action) {
  const indicator = yield select(getLoadingIndicator)

  if (!indicator.isOpen) {
    yield put(openLoadingIndicator())
  }

  const loginResponseAction = yield take(action =>
    /^USER_LOGIN_REQUEST_/.test(action.type)
  )

  if (/FAILURE$/.test(loginResponseAction.type)) {
    yield put(closeLoadingIndicator({ success: 'false', text: 'login failed' }))
    return
  }

  const token = get(loginResponseAction, 'payload.data.token')
  if (!token) {
    return
  }

  yield put(fetchCurrentUser(token))
  const currentUserResponseAction = yield take(action =>
    /^FETCH_CURRENT_USER_REQUEST_/.test(action.type)
  )

  if (/FAILURE$/.test(currentUserResponseAction.type)) {
    yield put(closeLoadingIndicator({ success: 'false', text: 'login failed' }))
    return
  }

  yield put(closeLoadingIndicator())
}

export default function* watchLoginSaga() {
  yield takeLatest('USER_LOGIN_REQUEST', loginSaga)
}
