import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native'
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

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

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
      scrollValue: new Animated.Value(0),
      // TODO: FIND BETTER SOLUTION TO HANDLE KEYBOARD APPEARANCE ON IOS
      // https://github.com/APSL/react-native-keyboard-aware-scroll-view
      flatlistPaddingBottom: 0,
    }
    this.onScrollEvent = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollValue } } }],
      { useNativeDriver: true }
    )
  }

  render() {
    const {
      state: { isEditMode, displayNameValue, flatlistPaddingBottom },
      props: { routeToUserMessages },
    } = this

    return (
      <Screen
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
          behavior={config.isAndroid ? 'padding' : null}
          keyboardVerticalOffset={config.isAndroid ? 16 : 0}
        >
          <AnimatedFlatlist
            contentContainerStyle={{ paddingBottom: flatlistPaddingBottom }}
            data={this.data}
            keyExtractor={item => `profile-${item.section}-section`}
            onScroll={this.onScrollEvent}
            renderItem={this.renderProfileSections}
            scrollEventThrottle={14}
            style={[
              styles.scrollview,
              { paddingBottom: IPHONE_X_SAFE_BOTTOM_PADDING },
            ]}
          />
        </KeyboardAvoidingView>
      </Screen>
    )
  }

  get data() {
    return [
      {
        section: 'GALLERY',
        data: [
          'https://picsum.photos/400/700',
          'https://picsum.photos/400/500',
          'https://picsum.photos/600/600',
          'https://picsum.photos/450/700',
          'https://picsum.photos/350/250',
          'https://picsum.photos/500/500',
        ],
      },
      {
        section: 'ABOUT',
        data: '',
      },
      {
        section: 'INTERESTS',
        data: [],
      },
      {
        section: 'MESSAGE_ME_IF',
        data: '',
      },
    ]
  }

  renderProfileSections = ({ item: { section, data }, index }) => {
    const { isEditMode } = this.state

    if (section === 'GALLERY') {
      return (
        <Animated.View
          style={{
            transform: [{ translateY: this.displayImageTranslateY }],
          }}
        >
          <Gallery isEditMode={isEditMode} images={data} />
        </Animated.View>
      )
    }

    if (section === 'ABOUT') {
      return <About isEditMode={isEditMode} text={data} />
    }

    if (section === 'INTERESTS') {
      return (
        <Interests
          isEditMode={isEditMode}
          interests={data}
          style={{ marginBottom: 24 }}
        />
      )
    }

    if (section === 'MESSAGE_ME_IF') {
      return (
        <MessageMeIf
          isEditMode={isEditMode}
          text={data}
          style={{ marginBottom: 160 }}
          onFocusTextInput={() =>
            this.setState({
              flatlistPaddingBottom: config.isIos ? 150 : 0,
            })
          }
          onBlurTextInput={() => this.setState({ flatlistPaddingBottom: 0 })}
        />
      )
    }
  }

  get displayImageTranslateY() {
    return this.state.scrollValue.interpolate({
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
