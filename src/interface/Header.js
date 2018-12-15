import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native'
import Flex from './Flex'
import Text from './Text'
import { COLORS } from './constants'

const Header = ({ leftChild = null, rightChild = null, headerText = null }) => (
  <Flex
    row
    spaceBetween
    alignCenter
    style={[styles.container, { width: Dimensions.get('window').width }]}
  >
    <View>{leftChild}</View>
    <Text>{headerText}</Text>
    <View>{rightChild}</View>
  </Flex>
)

export default Header

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.mediumGrey,
  },
})
