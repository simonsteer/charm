export const usersFetchRequest = () => ({
  type: 'USERS_FETCH_REQUEST',
  payload: {
    endpoint: 'users',
    method: 'get',
  },
})
