import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Flex from './Flex'
import Text from './Text'
import { COLORS } from './constants'

const Button = ({
  onPress,
  size,
  style,
  disabled,
  color,
  children,
  animated,
  rightChild,
  leftChild,
}) => {
  const textColor = BUTTON_TEXT_COLORS[disabled ? 'disabled' : color] || 'black'

  const buttonStyle = {
    ...styles.container,
    backgroundColor: disabled ? COLORS.lightGrey : COLORS[color],
    ...styles[size],
  }

  const button = (
    <Flex
      animated={animated}
      row
      center
      style={[buttonStyle, color === 'white' && styles.border, style]}
    >
      {!!leftChild && leftChild}
      <Text bold size={size} color={textColor}>
        {children.toUpperCase()}
      </Text>
      {!!rightChild && rightChild}
    </Flex>
  )

  return disabled ? (
    button
  ) : (
    <TouchableOpacity onPress={onPress}>{button}</TouchableOpacity>
  )
}

Button.defaultProps = {
  onPress() {},
  size: 'medium',
  style: {},
  color: 'white',
  disabled: false,
  children: null,
  animated: false,
}

export default Button

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  small: { paddingVertical: 12, paddingHorizontal: 20 },
  medium: { paddingVertical: 16, paddingHorizontal: 24 },
  large: { paddingVertical: 20, paddingHorizontal: 28 },
})

const BUTTON_TEXT_COLORS = {
  teal: 'white',
  black: 'white',
  disabled: 'mediumGrey',
  white: 'darkGrey',
  yellow: 'darkGrey',
  pink: 'white',
}
