import React from 'react'
import { Text as RNText, View } from 'react-native'
import noop from 'lodash/noop'
import { COLORS } from './constants'

const Text = ({
  size,
  color,
  bold,
  children,
  style,
  center,
  letterSpacing,
  lineHeight,
  selectable,
  ...restProps
}) => (
  <View pointerEvents={selectable ? 'auto' : 'none'}>
    <RNText
      {...restProps}
      style={{
        textAlign: center ? 'center' : 'left',
        color: COLORS[color],
        ...styles[size],
        lineHeight,
        fontWeight: bold ? '700' : '400',
        ...style,
      }}
    >
      {children}
    </RNText>
  </View>
)

Text.defaultProps = {
  size: 'medium',
  color: 'black',
  bold: false,
  children: null,
  style: {},
  center: false,
  letterSpacing: 0.75,
  lineHeight: null,
  selectable: false,
}

export default Text

const styles = {
  small: {
    fontSize: 12,
    letterSpacing: 0.25,
  },
  medium: {
    fontSize: 16,
    letterSpacing: 0.75,
  },
  title: {
    fontSize: 20,
    letterSpacing: 0.75,
  },
  large: {
    fontSize: 24,
    letterSpacing: 0.75,
  },
  jumbo: {
    fontSize: 32,
    letterSpacing: 0.75,
  },
}
