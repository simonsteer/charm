import React, { Component } from 'react'
import { StyleSheet, Animated, View } from 'react-native'
import { config } from '../../interface/utils'
import Screen from '../../interface/Screen'
import Header from '../../interface/Header'
import Text from '../../interface/Text'
import { COLORS } from '../../interface/constants'
import DisplayImages from './DisplayImages'
import About from './About'

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
          scrollEventThrottle={14}
          onScroll={this.onScrollEvent}
          style={styles.scrollview}
        >
          <Animated.View
            style={{
              transform: [
                { scale: this.displayImageScale },
                { translateY: this.displayImageTranslateY },
              ],
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
          <About />
        </Animated.ScrollView>
      </Screen>
    )
  }

  get displayImageScale() {
    return this.scrollValue.interpolate({
      inputRange: [-config.deviceWidth, 0],
      outputRange: [1.7, 1],
      extrapolateRight: 'clamp',
    })
  }

  get displayImageTranslateY() {
    return this.scrollValue.interpolate({
      inputRange: [-config.deviceWidth, 0],
      outputRange: [-config.deviceWidth * 0.7, 0],
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
