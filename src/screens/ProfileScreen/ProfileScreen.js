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

export default class ProfileScreen extends Component {
  static defaultProps = {
    displayName: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      isEditMode: false,
      displayNameValue: props.displayName,
    }
    this.scrollValue = new Animated.Value(0)
    this.onScrollEvent = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollValue } } }],
      { useNativeDriver: true }
    )
  }

  render() {
    const { isEditMode, displayNameValue } = this.state

    return (
      <Screen
        color={COLORS.white}
        center
        header={
          <Header
            border
            header={
              isEditMode ? (
                <TextInput
                  value={displayNameValue}
                  onChangeText={this.handleChangeDisplayNameText}
                  style={{
                    width: config.deviceWidth / 2,
                    fontSize: 20,
                    letterSpacing: 0.75,
                    textAlign: 'center',
                    fontWeight: '700',
                  }}
                />
              ) : (
                displayNameValue
              )
            }
            rightChild={
              <TouchableOpacity onPress={this.handlePressHeaderRightChild}>
                <Icon
                  circle
                  color={COLORS.white}
                  name={isEditMode ? 'ios-save' : 'md-create'}
                  style={{ paddingTop: 1, paddingLeft: 1 }}
                  size={20}
                />
              </TouchableOpacity>
            }
          />
        }
        useBottomPadding={false}
      >
        <KeyboardAvoidingView
          behavior="padding"
          contentContainerStyle={{ height: '100%' }}
        >
          <Animated.ScrollView
            onScroll={this.onScrollEvent}
            scrollEventThrottle={14}
            style={[
              styles.scrollview,
              { paddingBottom: IPHONE_X_SAFE_BOTTOM_PADDING },
            ]}
          >
            <Animated.View
              style={{
                transform: [{ translateY: this.displayImageTranslateY }],
              }}
            >
              <Gallery
                isEditMode={isEditMode}
                images={[
                  'https://picsum.photos/400/700',
                  'https://picsum.photos/400/500',
                  'https://picsum.photos/600/600',
                  'https://picsum.photos/450/700',
                  'https://picsum.photos/350/250',
                  'https://picsum.photos/500/500',
                ]}
              />
            </Animated.View>
            <About
              isEditMode={isEditMode}
              text={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore `}
            />
            <Interests
              isEditMode={isEditMode}
              interests={[
                'art & design',
                'music',
                'politics',
                'computer science',
                'health & fitness',
              ]}
            />
          </Animated.ScrollView>
        </KeyboardAvoidingView>
      </Screen>
    )
  }

  get displayImageTranslateY() {
    return this.scrollValue.interpolate({
      inputRange: [-config.deviceWidth, 0],
      outputRange: [-config.deviceWidth, 0],
      extrapolateRight: 'clamp',
    })
  }

  handleChangeDisplayNameText = displayNameValue =>
    this.setState({ displayNameValue })

  handlePressHeaderRightChild = () => {
    const { isEditMode } = this.state

    if (isEditMode) {
      console.log('CHECKING FOR CHANGES AND SAVING THEM TO DATABASE')
    }

    this.setState({ isEditMode: !isEditMode })
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    padding: 16,
  },
})
