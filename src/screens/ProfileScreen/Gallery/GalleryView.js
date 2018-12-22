import React, { Component, Fragment } from 'react'
import { Image, FlatList, View, StyleSheet } from 'react-native'
import range from 'lodash/range'
import { LinearGradient } from 'expo'
import { config } from '../../../interface/utils'
import Flex from '../../../interface/Flex'
import Text from '../../../interface/Text'
import Pill from '../../../interface/Pill'
import Icon from '../../../interface/Icon'
import { COLORS } from '../../../interface/constants'

export default class GalleryView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.viewabilityConfig = {
      itemVisiblePercentThreshold: 50,
    }
  }

  render() {
    const {
      props: { images },
      state: { currentIndex },
    } = this

    const shouldShowImages = images.length > 0

    return (
      <Flex
        center
        style={{
          width: config.deviceWidth,
          height: config.deviceWidth,
          backgroundColor: COLORS.black,
        }}
      >
        {shouldShowImages ? (
          <FlatList
            horizontal
            data={images}
            decelerationRate="fast"
            keyExtractor={(item, index) => `gallery-view-image-${index}`}
            onViewableItemsChanged={this.handleViewableItemsChanged}
            renderItem={({ item, index }) => (
              <Image
                resizeMode="contain"
                style={{ aspectRatio: 1, width: config.deviceWidth }}
                source={{ uri: item }}
              />
            )}
            showsHorizontalScrollIndicator={false}
            snapToInterval={config.deviceWidth}
            viewabilityConfig={this.viewabilityConfig}
          />
        ) : (
          <Icon
            name="ios-contact"
            color={COLORS.darkGrey}
            size={config.deviceWidth / 3}
          />
        )}
        <Flex center row pointerEvents="none" style={styles.dotContainer}>
          {this.renderDots()}
        </Flex>
        <LinearGradient
          pointerEvents="box-none"
          colors={['rgba(0,0,0,0)', COLORS.black]}
          style={{
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 0,
            width: config.deviceWidth,
            height: config.deviceWidth / 3,
          }}
        >
          <Flex
            style={{
              padding: 16,
              width: config.deviceWidth,
            }}
            row
            justifyEnd
            alignEnd
          >
            <Pill
              color={COLORS.pink}
              text="87% "
              textColor="white"
              rightChild={
                <Icon name="ios-heart" size={13} color={COLORS.white} />
              }
            />
          </Flex>
        </LinearGradient>
      </Flex>
    )
  }

  handleViewableItemsChanged = ({ changed }) => {
    const currentIndex = changed[0].index
    this.setState({ currentIndex })
  }

  renderDots = () => {
    const {
      props: { images },
      state: { currentIndex },
    } = this

    if (images.length <= 1) {
      return null
    }

    return range(images.length).map(index => (
      <View
        key={`gallery-dot-${index}`}
        style={[
          styles.dot,
          {
            backgroundColor:
              index === currentIndex ? COLORS.white : 'transparent',
            marginLeft: index === 0 ? 0 : 8,
          },
        ]}
      />
    ))
  }
}

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
})
