import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Flex from './Flex'
import Text from './Text'
import { COLORS } from './constants'
import { routeBack } from '../actions/navigation'
import { config } from './utils'

const Header = ({
  leftChild = null,
  rightChild = null,
  headerText = null,
  routeBack,
  color = 'transparent',
  border = false,
}) => (
  <Flex
    row
    spaceBetween
    alignCenter
    style={[
      styles.container,
      {
        backgroundColor: color,
        width: config.deviceWidth,
        height: config.isIphoneX ? 104 : 60,
        paddingTop: config.isIphoneX ? 44 : 0,
        borderBottomWidth: border ? StyleSheet.hairlineWidth : 0,
        borderBottomColor: 'rgba(0,0,0,0.2)',
      },
    ]}
  >
    <Flex center style={[styles.leftChild, { top: config.isIphoneX ? 44 : 0 }]}>
      {leftChild ? (
        leftChild
      ) : (
        <TouchableOpacity onPress={routeBack}>
          <Text style={{ padding: 16 }}>BACK</Text>
        </TouchableOpacity>
      )}
    </Flex>
    <Text>{headerText}</Text>
    <Flex
      center
      style={[styles.rightChild, { top: config.isIphoneX ? 44 : 0 }]}
    >
      {rightChild}
    </Flex>
  </Flex>
)

const mapDispatchToProps = {
  routeBack,
}

export default connect(
  null,
  mapDispatchToProps
)(Header)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingHorizontal: 16,
  },
  leftChild: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  rightChild: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
})
