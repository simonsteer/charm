import { take, takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'
import { getApiUrl } from '../interface/constants'

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
  const responseAction = yield call(request, action)
  yield put(responseAction)
}

export default function* watchRequestSaga() {
  yield takeLatest(action => /_REQUEST$/.test(action.type), requestSaga)
}
