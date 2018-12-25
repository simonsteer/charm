import React, { Component, Fragment } from 'react'
import { StyleSheet, Animated } from 'react-native'
import {
  COLORS,
  interfaceStyles,
  IPHONE_X_SAFE_BOTTOM_PADDING,
} from '../../interface/constants'
import { config } from '../../interface/utils'
import { modalStyles } from '../../interface/constants'
import Modal from '../../interface/Modal'
import Flex from '../../interface/Flex'
import ActionSheetSlat from './ActionSheetSlat'

export default class ActionSheet extends Component {
  constructor(props) {
    super(props)
    this.translateYOffset =
      props.params.options.length * 45 + IPHONE_X_SAFE_BOTTOM_PADDING + 24
    this.state = {
      translateY: new Animated.Value(this.translateYOffset),
      hasOpened: false,
    }
  }

  render() {
    const {
      state: { translateY, hasOpened },
      props: { closeModal, params },
    } = this

    return (
      <Modal
        openAnimation={this.openAnimation}
        closeAnimation={this.closeAnimation}
        style={{
          justifyContent: 'flex-end',
          paddingHorizontal: 16,
          paddingBottom: IPHONE_X_SAFE_BOTTOM_PADDING + 16,
        }}
        shouldCenterChildren={false}
        isDismissable={hasOpened}
      >
        <Flex
          animated
          style={[
            modalStyles.base,
            {
              paddingVertical: 4,
              transform: [{ translateY }],
            },
          ]}
        >
          {params.options.map((option, index) => (
            <ActionSheetSlat
              key={`action-sheet-option-${index}`}
              option={option}
              index={index}
            />
          ))}
        </Flex>
      </Modal>
    )
  }

  openAnimation = () =>
    Animated.timing(this.state.translateY, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => this.setState({ hasOpened: true }))

  closeAnimation = endcloseModal =>
    Animated.timing(this.state.translateY, {
      toValue: this.translateYOffset,
      duration: 150,
      useNativeDriver: true,
    }).start(endcloseModal)
}
