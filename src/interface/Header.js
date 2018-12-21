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
  headerText,
  routeBack,
  color,
  border,
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
        height: config.isIphoneX ? 100 : 88,
        paddingTop: config.isIphoneX ? 32 : 24,
        borderBottomWidth: border ? StyleSheet.hairlineWidth : 0,
        borderBottomColor: 'rgba(0,0,0,0.5)',
      },
    ]}
  >
    <Flex center>
      {leftChild ? (
        leftChild
      ) : (
        <TouchableOpacity onPress={routeBack}>
          <Flex style={styles.backButton} center>
            <Icon color={COLORS.white} />
          </Flex>
        </TouchableOpacity>
      )}
    </Flex>
    <Text>{headerText}</Text>
    <Flex center>{rightChild}</Flex>
  </Flex>
)

Header.defaultProps = {
  leftChild: null,
  rightChild: null,
  headerText: null,
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
    paddingHorizontal: 16,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    paddingRight: 2,
    paddingTop: 2,
    backgroundColor: COLORS.black,
  },
})
