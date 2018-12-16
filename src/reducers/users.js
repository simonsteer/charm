import u from 'updeep'

const initialState = {
  current: { isFetching: false, hasFetched: false },
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
    case 'USER_SIGNUP_REQUEST': {
      return u({ current: { isFetching: true } }, state)
    }

    case 'USER_LOGIN_REQUEST_FAILURE':
    case 'USER_SIGNUP_REQUEST_FAILURE':
    case 'FETCH_CURRENT_USER_REQUEST_FAILURE': {
      return u({ current: { isFetching: false } }, state)
    }

    case 'FETCH_CURRENT_USER_REQUEST_SUCCESS': {
      const { data } = action.payload
      return u(
        {
          current: {
            ...data,
            isFetching: false,
            hasFetched: true,
          },
        },
        state
      )
    }

    default:
      return state
  }
}

export default usersReducer
