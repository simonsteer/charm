import { take, takeEvery, put, call } from 'redux-saga/effects'
import axios from 'axios'
import { getApiUrl } from '../interface/constants'
import {
  openLoadingIndicator,
  closeLoadingIndicator,
} from '../actions/navigation'

const request = async action => {
  const {
    payload: { endpoint, body = {}, method },
  } = action
  const requestUrl = `${getApiUrl()}/${endpoint}`

  try {
    const response = await axios[method](requestUrl, body)
    const requestSuccessAction = {
      type: `${action.type}_SUCCESS`,
      payload: { data: response.data },
    }
    return requestSuccessAction
  } catch (error) {
    const requestFailedAction = {
      type: `${action.type}_FAILURE`,
      payload: { error },
    }
    return requestFailedAction
  }
}

function* requestSaga(action) {
  const {
    payload: { loadingIndicator },
  } = action

  if (loadingIndicator) {
    yield put(openLoadingIndicator({ text: 'loading' }))
  }

  const responseAction = yield call(request, action)

  if (loadingIndicator) {
    const success = /_SUCCESS$/.test(responseAction.type)
    yield put(
      closeLoadingIndicator({ success, text: success ? 'success' : 'error' })
    )
  }

  yield put(responseAction)
}

export default function* watchRequestSaga() {
  yield takeEvery(action => /_REQUEST$/.test(action.type), requestSaga)
}
