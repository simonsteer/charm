import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { config } from '../../interface/utils'
import Screen from '../../interface/Screen'
import Header from '../../interface/Header'
import Text from '../../interface/Text'
import Flex from '../../interface/Flex'
import Icon from '../../interface/Icon'
import TextInput from '../../interface/TextInput'
import { COLORS, IPHONE_X_SAFE_BOTTOM_PADDING } from '../../interface/constants'
import Gallery from './Gallery'
import About from './About'
import Interests from './Interests'
import MessageMeIf from './MessageMeIf'
import StickyFooter from '../../shared/StickyFooter'
import Button from '../../interface/Button'
import SendMessageButton from './SendMessageButton'

export default class ProfileScreenHeader extends Component {
  static defaultProps = {
    displayName: '',
    isEditMode: false,
    onPressHeaderRightChild() {},
  }

  constructor(props) {
    super(props)
    this.state = {
      displayName: props.displayName,
    }
  }

  render() {
    const {
      props: { onPressHeaderRightChild, isEditMode },
      state: { displayName },
    } = this

    return (
      <Header
        border
        header={
          isEditMode ? (
            <TextInput
              onChangeText={this.handleChangeDisplayNameText}
              placeholder="display name"
              style={{
                width: config.deviceWidth / 2,
                fontSize: 20,
                letterSpacing: 0.75,
                textAlign: 'center',
                fontWeight: '700',
              }}
              value={displayName}
            />
          ) : (
            displayName
          )
        }
        rightChild={
          <TouchableOpacity onPress={onPressHeaderRightChild}>
            <Icon
              circle
              color={COLORS.white}
              name={isEditMode ? 'ios-save' : 'md-create'}
              style={{
                paddingTop: 1,
                paddingLeft: 1,
                backgroundColor: COLORS.pink,
              }}
              size={20}
            />
          </TouchableOpacity>
        }
      />
    )
  }

  handleChangeDisplayNameText = displayName => this.setState({ displayName })
}
