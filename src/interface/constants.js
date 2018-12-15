import { Constants } from 'expo'

export const COLORS = {
  yellow: '#FFE97F',
  teal: '#35BACC',
  black: '#141414',
  white: 'rgb(253, 253, 253)',
  pink: '#FF72A3',
  blue: '#233BA8',
  lightGrey: '#EFEFEF',
  mediumGrey: '#C1C1C1',
  darkGrey: 'rgb(88, 88, 88)',
}

export const getApiUrl = () => {
  const { manifest } = Constants
  const apiUrl =
    typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev
      ? manifest.debuggerHost
          .split(':')
          .shift()
          .concat(':5678')
      : 'api.example.com'

  return apiUrl
}
