import { createSelector } from 'reselect'

export const getNavigation = state => state.navigation

export const getLoadingIndicator = state => state.overlay.loadingIndicator

export const getAlert = state => state.overlay.alert
