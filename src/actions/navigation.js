import noop from 'lodash/noop'
import { NavigationActions } from 'react-navigation'

export const routeTo = (routeName, params = {}) =>
  NavigationActions.navigate({ routeName, params })

export const routeBack = () => NavigationActions.back()

export const openActionSheet = options => openModal('ActionSheet', { options })

export const openDiscoverFilters = () => openModal('DiscoverFilters')

export const openLoadingIndicator = ({ text = 'loading' } = {}) => ({
  type: 'OPEN_LOADING_INDICATOR',
  payload: { text },
})

export const closeLoadingIndicator = ({
  success = true,
  text = 'success!',
} = {}) => ({
  type: 'CLOSE_LOADING_INDICATOR',
  payload: { success, text },
})

export const openSnack = ({
  message = '',
  ctaText = 'OK',
  ctaOnPress = () => {},
  requiresInteraction = false,
} = {}) => ({
  type: 'OPEN_SNACK',
  payload: { message, ctaText, ctaOnPress },
})

export const closeSnack = () => ({ type: 'DISMISS_SNACK' })

export const openModal = (name, params = {}) => ({
  type: 'OPEN_MODAL',
  payload: {
    name,
    params,
  },
})

export const closeModal = () => ({ type: 'START_CLOSE_MODAL' })

export const endcloseModal = () => ({ type: 'END_CLOSE_MODAL' })
