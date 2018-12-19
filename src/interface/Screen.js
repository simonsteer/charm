import React from 'react'
import { View, Dimensions, Platform } from 'react-native'
import Flex from './Flex'
import { isIphoneX } from './utils'

const Screen = ({ children, header, color, center, ...flexProps }) => (
  <View
    style={{
      width: Dimensions.get('window').width,
      flex: 1,
      paddingTop: isIphoneX() ? 44 : 0,
      paddingBottom: isIphoneX() ? 34 : 0,
      backgroundColor: color,
    }}
  >
    <Flex
      center={center}
      flex={1}
      style={{
        paddingTop: header ? 60 : 0,
        width: Dimensions.get('window').width,
      }}
      {...flexProps}
    >
      {!!header && header}
      {children}
    </Flex>
  </View>
)

Screen.defaultProps = {
  center: false,
  children: null,
  color: 'white',
}

export default Screen
