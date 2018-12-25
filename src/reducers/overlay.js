import get from 'lodash/get'
import u from 'updeep'

const initialState = {
  modal: {
    isClosing: false,
    name: null,
    params: {},
  },
  loadingIndicator: {
    isOpen: false,
    success: null,
    text: null,
  },
  snack: {
    isOpen: false,
    message: null,
    ctaText: null,
    ctaOnPress: null,
    requiresInteraction: false,
  },
}

const overlayReducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case 'OPEN_LOADING_INDICATOR': {
      return u({ loadingIndicator: { isOpen: true, ...payload } }, state)
    }

    case 'CLOSE_LOADING_INDICATOR': {
      return u({ loadingIndicator: { isOpen: false, ...payload } }, state)
    }

    case 'OPEN_MODAL': {
      return u({ modal: { ...payload } }, state)
    }

    case 'START_CLOSE_MODAL': {
      return u({ modal: { isClosing: true } }, state)
    }

    case 'END_CLOSE_MODAL': {
      return u({ modal: { isClosing: false, name: null, params: {} } }, state)
    }

    case 'OPEN_SNACK': {
      // NOTE: For some reason updeep attempts to update ctaOnPress
      // to the return value of the called function instead of
      // updating it to the function itself
      return { ...state, snack: { ...payload, isOpen: true } }
    }

    case 'DISMISS_SNACK': {
      return u({ snack: initialState.snack }, state)
    }

    default:
      return state
  }
}

export default overlayReducer
