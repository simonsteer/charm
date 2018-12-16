export const fetchCurrentUser = token => ({
  type: 'FETCH_CURRENT_USER_REQUEST',
  payload: {
    endpoint: `users/current`,
    method: 'get',
    body: {
      headers: { Authorization: `Bearer ${token}` },
    },
  },
})

export const fetchUserById = userId => ({
  type: 'FETCH_USER_REQUEST',
  payload: {
    endpoint: `users/${userId}`,
    method: 'get',
  },
})

export const fetchUsersByLocation = location => ({
  type: 'FETCH_USERS_BY_LOCATION_REQUEST',
  payload: {
    endpoint: 'users',
    method: 'get',
    body: { location },
  },
})

export const userSignupRequest = ({ email, password }) => ({
  type: 'USER_SIGNUP_REQUEST',
  payload: {
    endpoint: 'signup',
    body: { email, password },
    method: 'post',
  },
})

export const userLoginRequest = ({ email, password }) => ({
  type: 'USER_LOGIN_REQUEST',
  payload: {
    endpoint: 'login',
    body: { email, password },
    method: 'post',
  },
})
