import { createSelector } from 'reselect'

export const getNavigation = state => state.navigation

export const getCurrentRoute = createSelector(
  getNavigation,
  navigation => navigation.currentRoute
)

export const getLoadingIndicator = state => state.overlay.loadingIndicator

export const getSnack = state => state.overlay.snack

export const getModal = state => state.overlay.modal

export const getModalIsClosing = createSelector(
  getModal,
  modal => modal.isClosing
)
