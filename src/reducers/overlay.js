import get from 'lodash/get'
import u from 'updeep'

const initialState = {
  alert: {
    isOpen: false,
    name: null,
    props: {},
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

    default:
      return state
  }
}

export default overlayReducer
