import React, { Component } from 'react'
import { StyleSheet, Animated, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { COLORS, IPHONE_X_SAFE_BOTTOM_PADDING } from '../../interface/constants'
import { config } from '../../interface/utils'
import Screen from '../../interface/Screen'
import Gallery from './Gallery'
import About from './About'
import Interests from './Interests'
import MessageMeIf from './MessageMeIf'
import SendMessageButton from './SendMessageButton'
import ProfileScreenHeader from './ProfileScreenHeader'
import { routeTo } from '../../actions/navigation'

const mapDispatchToProps = {
  routeToUserMessages: userId => routeTo('UserMessages', { userId }),
}

@connect(
  null,
  mapDispatchToProps
)
export default class ProfileScreen extends Component {
  static defaultProps = {
    displayName: '',
    routeToUserMessages() {},
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
    const {
      state: { isEditMode, displayNameValue },
      props: { routeToUserMessages },
    } = this

    return (
      <Screen
        color={COLORS.lightGrey}
        center
        header={
          <ProfileScreenHeader
            isEditMode={isEditMode}
            onPressHeaderRightChild={this.handlePressHeaderRightChild}
          />
        }
        stickyFooterComponent={
          !isEditMode && (
            <SendMessageButton routeToUserMessages={routeToUserMessages} />
          )
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
                'kayaking',
                'tennis',
                'graphic design',
                'weight lifting',
                'health & fitness',
                'horror movies',
                'computer science',
                'drag',
                'house music',
              ]}
              style={{ marginBottom: 24 }}
            />
            <MessageMeIf
              isEditMode={isEditMode}
              text={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore `}
              style={{ marginBottom: 160 }}
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
