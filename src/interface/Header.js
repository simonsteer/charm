import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import { COLORS } from './constants'
import { routeBack, openActionSheet } from '../actions/navigation'
import { config } from './utils'

const Header = ({
  leftChild,
  rightChild,
  heading,
  color,
  border,
  moreOptions,
  openActionSheet,
  routeBack,
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
    {!!heading &&
      (typeof heading === 'string' ? <Text bold>{heading}</Text> : heading)}

    <Flex center style={styles.rightChild}>
      {moreOptions ? (
        <TouchableOpacity onPress={() => openActionSheet(moreOptions)}>
          <Icon
            name="md-more"
            circle
            color={COLORS.white}
            style={{
              backgroundColor: COLORS.pink,
              paddingTop: 2,
              paddingLeft: 1,
            }}
          />
        </TouchableOpacity>
      ) : (
        rightChild
      )}
    </Flex>
  </Flex>
)

Header.defaultProps = {
  leftChild: null,
  rightChild: null,
  moreOptions: null,
  heading: null,
  routeBack() {},
  color: 'transparent',
  border: true,
}

const mapDispatchToProps = {
  openActionSheet,
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
