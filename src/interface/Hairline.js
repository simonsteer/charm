import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from './constants'

const Hairline = ({ color, style, vertical }) => (
  <View
    style={[
      {
        borderTopWidth: vertical ? 0 : StyleSheet.hairlineWidth,
        borderLeftWidth: vertical ? StyleSheet.hairlineWidth : 0,
        borderColor: color,
      },
      style,
    ]}
  />
)

Hairline.defaultProps = {
  color: COLORS.pink,
  style: {},
  vertical: false,
}

export default Hairline
