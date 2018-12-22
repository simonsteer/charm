import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import { COLORS } from './constants'
import { routeBack } from '../actions/navigation'
import { config } from './utils'

const Header = ({
  leftChild,
  rightChild,
  header,
  routeBack,
  color,
  border,
}) => (
  <Flex
    row
    center
    style={[
      styles.container,
      {
        backgroundColor: color,
        width: config.deviceWidth,
        height: config.isIphoneX ? 100 : 88,
        paddingTop: config.isIphoneX ? 32 : 24,
        borderBottomWidth: border ? StyleSheet.hairlineWidth : 0,
        borderBottomColor: 'rgba(0,0,0,0.5)',
      },
    ]}
  >
    <Flex center style={styles.leftChild}>
      {leftChild ? (
        leftChild
      ) : (
        <TouchableOpacity onPress={routeBack}>
          <Icon
            circle
            color={COLORS.white}
            style={{
              backgroundColor: COLORS.pink,
              paddingRight: 2,
              paddingTop: 2,
            }}
          />
        </TouchableOpacity>
      )}
    </Flex>
    {!!header &&
      (typeof header === 'string' ? (
        <Text bold size="title">
          {header}
        </Text>
      ) : (
        header
      ))}

    <Flex center style={styles.rightChild}>
      {rightChild}
    </Flex>
  </Flex>
)

Header.defaultProps = {
  leftChild: null,
  rightChild: null,
  header: null,
  routeBack() {},
  color: 'transparent',
  border: false,
}

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
  },
  leftChild: {
    position: 'absolute',
    left: 16,
    bottom: 16,
  },
  rightChild: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
})
