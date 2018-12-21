import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from './constants'

const Icon = ({ name, color, size }) => (
  <Ionicons name={name} size={size} color={color} />
)

Icon.defaultProps = {
  name: 'ios-arrow-back',
  size: 24,
  color: COLORS.black,
}

export default Icon
