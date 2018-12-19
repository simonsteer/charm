import { NavigationActions } from 'react-navigation'

let _navigator

export const setTopLevelNavigator = navigatorRef => (_navigator = navigatorRef)

export const _navigate = navigationAction =>
  _navigator.dispatch(navigationAction)

export default {
  _navigate,
  setTopLevelNavigator,
}
