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

    default:
      return state
  }
}

export default overlayReducer
