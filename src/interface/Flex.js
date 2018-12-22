import React from 'react'
import { View, Animated } from 'react-native'

const Flex = ({
  style,
  children,
  flex,
  row,
  wrap,
  center,
  alignCenter,
  alignEnd,
  justifyCenter,
  justifyEnd,
  spaceBetween,
  spaceAround,
  selfStretch,
  animated,
  ...restProps
}) => {
  const appliedStyles = [
    { flex },
    wrap && { flexWrap: 'wrap' },
    row && { flexDirection: 'row' },
    center && { justifyContent: 'center', alignItems: 'center' },
    spaceBetween && { justifyContent: 'space-between' },
    spaceAround && { justifyContent: 'space-around' },
    justifyCenter && { justifyContent: 'center' },
    justifyEnd && { justifyContent: 'flex-end' },
    alignCenter && { alignItems: 'center' },
    alignEnd && { alignItems: 'flex-end' },
    selfStretch && { alignSelf: 'stretch' },
    style,
  ]

  const Shell = animated ? Animated.View : View

  return (
    <Shell style={appliedStyles} {...restProps}>
      {children}
    </Shell>
  )
}

Flex.defaultProps = {
  row: false,
  center: false,
  children: null,
  spaceBetween: false,
  spaceAround: false,
  style: {},
  flex: null,
  animated: false,
}

export default Flex
