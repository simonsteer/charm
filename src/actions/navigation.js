export const openLoadingIndicator = ({ text, onOpen }) => ({
  type: 'OPEN_LOADING_INDICATOR',
  payload: { text, onOpen },
})

export const closeLoadingIndicator = ({ success, text, onClose }) => ({
  type: 'CLOSE_LOADING_INDICATOR',
  payload: { success, text, onClose },
})
