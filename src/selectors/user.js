import { createSelector } from 'reselect'

export const getAllUsers = state => state.users

export const getCurrentUser = createSelector(
  getAllUsers,
  allUsers => allUsers.current
)
