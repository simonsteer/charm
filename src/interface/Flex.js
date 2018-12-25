import React from 'react'
import { View, Animated, TouchableWithoutFeedback } from 'react-native'

const Flex = ({
  style,
  children,
  flex,
  row,
  wrap,
  center,
  alignStart,
  alignCenter,
  alignEnd,
  justifyCenter,
  justifyEnd,
  spaceBetween,
  spaceAround,
  selfStart,
  selfStretch,
  animated,
  onPress,
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
    alignStart && { alignItems: 'flex-start' },
    alignCenter && { alignItems: 'center' },
    alignEnd && { alignItems: 'flex-end' },
    selfStart && { alignSelf: 'flex-start' },
    selfStretch && { alignSelf: 'stretch' },
    style,
  ]

  const Shell = animated ? Animated.View : View

  const renderedChildren = (
    <Shell style={appliedStyles} {...restProps}>
      {children}
    </Shell>
  )

  return onPress ? (
    <TouchableWithoutFeedback onPress={onPress}>
      {renderedChildren}
    </TouchableWithoutFeedback>
  ) : (
    renderedChildren
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
  onPress: null,
}

export default Flex
