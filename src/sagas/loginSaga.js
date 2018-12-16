import { take, takeLatest, put, select } from 'redux-saga/effects'
import get from 'lodash/get'
import { fetchCurrentUser } from '../actions/user'
import { getCurrentUser } from '../selectors/user'

function* loginSaga(action) {
  const loginResponseAction = yield take(action =>
    /^USER_LOGIN_REQUEST_/.test(action.type)
  )

  if (/FAILURE$/.test(loginResponseAction.type)) {
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
    return
  }

  const currentUser = yield select(getCurrentUser)
}

export default function* watchLoginSaga() {
  yield takeLatest('USER_LOGIN_REQUEST', loginSaga)
}
