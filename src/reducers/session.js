import get from 'lodash/get'
import u from 'updeep'

const initialState = {
  token: null,
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST_SUCCESS': {
      const token = get(action, 'payload.data.token')
      return u({ token }, state)
    }

    default:
      return state
  }
}

export default sessionReducer
