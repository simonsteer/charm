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
  <View pointerEvents={selectable ? 'all' : 'none'}>
    <RNText
      {...restProps}
      style={{
        textAlign: center ? 'center' : 'left',
        color: COLORS[color],
        fontSize: styles.sizes[size],
        letterSpacing,
        lineHeight,
        fontWeight: bold ? '500' : '400',
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
  sizes: {
    small: 12,
    medium: 16,
    title: 20,
    large: 24,
    jumbo: 32,
  },
}
