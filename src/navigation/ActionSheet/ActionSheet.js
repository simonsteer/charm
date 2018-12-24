import React, { Component, Fragment } from 'react'
import { StyleSheet, Animated } from 'react-native'
import {
  COLORS,
  interfaceStyles,
  IPHONE_X_SAFE_BOTTOM_PADDING,
} from '../../interface/constants'
import { config } from '../../interface/utils'
import Alert from '../../interface/Alert'
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
      props: { closeAlert, params },
    } = this

    return (
      <Alert
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
            {
              paddingHorizontal: 16,
              paddingVertical: 4,
              backgroundColor: COLORS.white,
              borderRadius: 8,
              transform: [{ translateY }],
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: COLORS.white,
            },
            interfaceStyles.shadow,
            config.isAndroid && { elevation: 2 },
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
      </Alert>
    )
  }

  openAnimation = () =>
    Animated.spring(this.state.translateY, {
      toValue: 0,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start(() => this.setState({ hasOpened: true }))

  closeAnimation = endCloseAlert =>
    Animated.timing(this.state.translateY, {
      toValue: this.translateYOffset,
      duration: 150,
      useNativeDriver: true,
    }).start(endCloseAlert)
}
