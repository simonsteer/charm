import noop from 'lodash/noop'

export const openLoadingIndicator = ({
  text = 'loading',
  onOpen = noop,
} = {}) => ({
  type: 'OPEN_LOADING_INDICATOR',
  payload: { text, onOpen },
})

export const closeLoadingIndicator = ({
  success = true,
  text = 'success!',
  onClose = noop,
} = {}) => ({
  type: 'CLOSE_LOADING_INDICATOR',
  payload: { success, text, onClose },
})
