import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from './constants'

const Hairline = ({ color, style }) => (
  <View
    style={[
      {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: color,
      },
      style,
    ]}
  />
)

Hairline.defaultProps = {
  color: COLORS.pink,
  style: {},
}

export default Hairline
