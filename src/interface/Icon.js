import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from './constants'
import Flex from './Flex'

const Icon = ({ name, color, size, circle, backgroundColor, style }) => {
  const children = <Ionicons name={name} size={size} color={color} />
  return circle ? (
    <Flex center style={[styles.circle, { backgroundColor }, style]}>
      {children}
    </Flex>
  ) : (
    children
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
})

Icon.defaultProps = {
  name: 'ios-arrow-back',
  size: 24,
  color: COLORS.black,
  backgroundColor: COLORS.black,
  circle: false,
}

export default Icon
