import { AppNavigator } from '../navigation/AppContainer'

const findCurrentRoute = routes => {
  const lastRoute = routes[routes.length - 1]
  if (lastRoute.routes) {
    return findCurrentRoute(lastRoute.routes)
  }

  return lastRoute
}

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
)

const intitialStateWithCurrentRoute = {
  ...initialState,
  currentRoute: findCurrentRoute(initialState.routes),
}

const navigationReducer = (state = intitialStateWithCurrentRoute, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  const updatedState = nextState || state

  const currentRoute = findCurrentRoute(updatedState.routes)

  return { ...updatedState, currentRoute }
}

export default navigationReducer
