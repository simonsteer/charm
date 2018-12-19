import noop from 'lodash/noop'

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
