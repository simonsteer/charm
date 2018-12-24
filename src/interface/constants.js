import { Constants } from 'expo'
import { StyleSheet } from 'react-native'
import { config } from './utils'

export const COLORS = {
  yellow: '#FFE97F',
  teal: '#35BACC',
  black: '#141414',
  white: 'rgb(253, 253, 253)',
  pink: '#FF759A',
  lightPink: '#FFE1EB',
  blue: '#315DE0',
  lightBlue: '#DDE5FF',
  lightGrey: '#EFEFEF',
  mediumGrey: '#C1C1C1',
  darkGrey: 'rgb(88, 88, 88)',
}

export const getApiUrl = () => {
  const { manifest } = Constants
  const apiUrl =
    typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev
      ? `http://${manifest.debuggerHost
          .split(':')
          .shift()
          .concat(':5678')}`
      : 'https://api.example.com'

  return apiUrl
}

export const IPHONE_X_SAFE_BOTTOM_PADDING = config.isIphoneX ? 34 : 0

export const interfaceStyles = StyleSheet.create({
  shadow: {
    shadowOffset: { height: 8 },
    shadowColor: COLORS.black,
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
})
