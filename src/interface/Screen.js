import React from 'react'
import { View, Dimensions, Platform } from 'react-native'
import Flex from './Flex'
import { config } from './utils'

const Screen = ({ children, header, color, ...flexProps }) => (
  <View
    style={{
      width: Dimensions.get('window').width,
      flex: 1,
      paddingTop: config.isIphoneX ? 44 : 0,
      paddingBottom: config.isIphoneX ? 34 : 0,
      backgroundColor: color,
    }}
  >
    <Flex
      flex={1}
      style={{
        paddingTop: header ? (config.isIphoneX ? 56 : 88) : 0,
        width: config.deviceWidth,
      }}
      {...flexProps}
    >
      {children}
    </Flex>
    {!!header && header}
  </View>
)

Screen.defaultProps = {
  center: false,
  children: null,
  color: 'white',
}

export default Screen
