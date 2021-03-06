import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Flex from './Flex'
import Text from './Text'
import { COLORS } from './constants'

const Pill = ({
  text,
  onPress,
  color,
  textColor,
  style,
  size,
  leftChild,
  rightChild,
}) => {
  const children = (
    <Flex
      row
      center
      style={[
        styles.pill,
        paddingStyles[size],
        { backgroundColor: color },
        style,
      ]}
    >
      {!!leftChild && leftChild}
      <Text size={size} bold color={textColor}>
        {text.toUpperCase()}
      </Text>
      {!!rightChild && rightChild}
    </Flex>
  )

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  ) : (
    children
  )
}

Pill.defaultProps = {
  text: '',
  color: COLORS.black,
  textColor: 'white',
  onPress: null,
  style: {},
  size: 'small',
  leftChild: null,
  rightChild: null,
}

export default Pill

const styles = StyleSheet.create({
  pill: {
    borderRadius: 100,
  },
})

const paddingStyles = {
  tiny: {
    height: 24,
    paddingHorizontal: 8,
  },
  small: {
    height: 32,
    paddingHorizontal: 12,
  },
  medium: {
    height: 44,
    paddingHorizontal: 16,
  },
}
