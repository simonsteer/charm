export const openLoadingIndicator = ({ text }) => ({
  type: 'OPEN_LOADING_INDICATOR',
  payload: { text },
})

export const closeLoadingIndicator = ({ success }) => ({
  type: 'CLOSE_LOADING_INDICATOR',
  payload: { success },
})
