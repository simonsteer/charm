import React, { Component } from 'react'
import { Animated, Easing, TouchableOpacity } from 'react-native'
import Modal from '../../interface/Modal'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import Icon from '../../interface/Icon'
import Hairline from '../../interface/Hairline'
import { config } from '../../interface/utils'
import { COLORS, modalStyles } from '../../interface/constants'

const CLOSE_BUTTON_HIT_SLOP = { top: 8, left: 8, right: 8, bottom: 8 }

export default class DiscoverFilters extends Component {
  constructor() {
    super()
    this.state = {
      animatedValue: new Animated.Value(0),
      hasOpened: false,
    }
  }

  render() {
    const {
      props: { closeModal },
      state: { animatedValue, hasOpened },
    } = this

    const scale = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    })

    return (
      <Modal
        shouldShowOverlay
        isDismissable={hasOpened}
        openAnimation={this.openAnimation}
        closeAnimation={this.closeAnimation}
      >
        <Flex
          animated
          style={[
            modalStyles.base,
            {
              width: config.deviceWidth - 32,
              transform: [{ scale }],
              opacity: animatedValue,
            },
          ]}
        >
          <Flex center row spaceBetween style={{ width: '100%' }}>
            <TouchableOpacity
              onPress={closeModal}
              hitSlop={CLOSE_BUTTON_HIT_SLOP}
            >
              <Text bold color="blue">
                MODIFY YOUR SEARCH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Icon
                circle
                name="ios-close"
                color={COLORS.black}
                size={18}
                style={{
                  backgroundColor: COLORS.lightGrey,
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </Flex>
          <Hairline style={{ marginVertical: 16 }} />
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
        </Flex>
      </Modal>
    )
  }

  openAnimation = () =>
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.elastic(),
      useNativeDriver: true,
    }).start(() => this.setState({ hasOpened: true }))

  closeAnimation = endcloseModal =>
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(endcloseModal)
}
