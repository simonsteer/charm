const initialState = {
  current: { isFetching: false, hasFetched: false, data: {} },
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
    case 'USER_SIGNUP_REQUEST': {
      return { ...state, current: { ...state.current, isFetching: true } }
    }

    case 'FETCH_CURRENT_USER_REQUEST_SUCCESS': {
      const { data } = action.payload
      return {
        ...state,
        current: {
          ...state.current,
          data,
          isFetching: false,
          hasFetched: true,
        },
      }
    }

    default:
      return state
  }
}

export default usersReducer
