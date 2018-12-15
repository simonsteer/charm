import AppContainer from '../navigation/AppContainer'

export const navigationInitialState = {
  currentRoute: { routeName: '' },
}

const navigationReducer = (state, action) => {
  const nextState = {
    ...AppContainer.router.getStateForAction(action, state),
  }

  return nextState || state
}

export default navigationReducer
