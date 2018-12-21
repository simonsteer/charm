import React, { Component } from 'react'
import { StyleSheet, Animated, View } from 'react-native'
import { config } from '../../interface/utils'
import Screen from '../../interface/Screen'
import Header from '../../interface/Header'
import Text from '../../interface/Text'
import { COLORS } from '../../interface/constants'
import DisplayImages from './DisplayImages'
import About from './About'
import Interests from './Interests'

export default class ProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      isEditMode: false,
    }
    this.scrollValue = new Animated.Value(0)
    this.onScrollEvent = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollValue } } }],
      { useNativeDriver: true }
    )
  }

  render() {
    return (
      <Screen color={COLORS.white} center header={<Header border />}>
        <Animated.ScrollView
          onScroll={this.onScrollEvent}
          scrollEventThrottle={14}
          style={styles.scrollview}
        >
          <Animated.View
            style={{
              transform: [{ translateY: this.displayImageTranslateY }],
            }}
          >
            <DisplayImages
              images={[
                'https://picsum.photos/450/450',
                'https://picsum.photos/500/500',
                'https://picsum.photos/600/600',
              ]}
            />
          </Animated.View>
          <About
            text={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore `}
          />
          <Interests
            interests={[
              'art & design',
              'music',
              'politics',
              'computer science',
              'health & fitness',
            ]}
          />
        </Animated.ScrollView>
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
