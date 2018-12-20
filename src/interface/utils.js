import { Dimensions, Platform } from 'react-native'

export const isIphoneX = () => {
  const { height, width } = Dimensions.get('window')

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812)
  )
}

export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const config = {
  get isIphoneX() {
    return isIphoneX()
  },
  get deviceWidth() {
    return Dimensions.get('window').width
  },
  get deviceHeight() {
    return Dimensions.get('window').height
  },
}
