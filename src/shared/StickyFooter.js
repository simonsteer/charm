import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import Flex from '../interface/Flex'
import { IPHONE_X_SAFE_BOTTOM_PADDING } from '../interface/constants'

const StickyFooter = ({ children, style }) => (
  <Flex
    pointerEvents="box-none"
    animated
    justifyEnd
    style={[
      {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: IPHONE_X_SAFE_BOTTOM_PADDING,
      },
      style,
    ]}
  >
    {children}
  </Flex>
)

StickyFooter.defaultProps = {
  scrollValue: new Animated.Value(0),
  children: null,
}

export default StickyFooter
