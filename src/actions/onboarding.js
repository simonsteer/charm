export const onboardSignupRequest = ({ email, password }) => ({
  type: 'ONBOARD_SIGNUP_REQUEST',
  payload: {
    endpoint: 'signup',
    body: { email, password },
    method: 'post',
  },
})
