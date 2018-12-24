import noop from 'lodash/noop'
import { NavigationActions } from 'react-navigation'

export const routeTo = (routeName, params) =>
  NavigationActions.navigate({ routeName, params })

export const routeBack = () => NavigationActions.back()

export const openActionSheet = options => openAlert('ActionSheet', { options })

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

export const openAlert = (alertName, params) => ({
  type: 'OPEN_ALERT',
  payload: {
    name: alertName,
    params,
  },
})

export const closeAlert = () => ({ type: 'START_CLOSE_ALERT' })

export const endCloseAlert = () => ({ type: 'END_CLOSE_ALERT' })
