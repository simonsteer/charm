import React, { Component } from 'react'
import { Image, FlatList, View } from 'react-native'
import range from 'lodash/range'
import { LinearGradient } from 'expo'
import { config } from '../../interface/utils'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import Pill from '../../interface/Pill'
import Icon from '../../interface/Icon'
import { COLORS } from '../../interface/constants'

class DisplayImages extends Component {
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

    return (
      <View>
        <FlatList
          horizontal
          data={images}
          decelerationRate="fast"
          onViewableItemsChanged={this.handleViewableItemsChanged}
          renderItem={({ item, index }) => (
            <Image
              style={{ aspectRatio: 1, width: config.deviceWidth }}
              source={{ uri: item }}
            />
          )}
          showsHorizontalScrollIndicator={false}
          snapToInterval={config.deviceWidth}
          style={{ backgroundColor: COLORS.black }}
          viewabilityConfig={this.viewabilityConfig}
        />
        <Flex
          center
          row
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 16,
            left: 0,
            right: 0,
          }}
        >
          {range(images.length).map(index => (
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  index === currentIndex ? COLORS.white : 'transparent',
                borderWidth: 1,
                borderColor: COLORS.white,
                marginLeft: index === 0 ? 0 : 8,
              }}
            />
          ))}
        </Flex>
        <LinearGradient
          pointerEvents="none"
          colors={['rgba(0,0,0,0)', COLORS.black]}
          style={{
            bottom: 0,
            height: config.deviceWidth / 3,
            justifyContent: 'flex-end',
            position: 'absolute',
            width: config.deviceWidth,
          }}
        >
          <Flex
            style={{
              padding: 16,
              width: config.deviceWidth,
            }}
            row
            spaceBetween
            alignEnd
          >
            <Text bold size="large" color="white">
              DisplayName
            </Text>
            <Pill
              color={COLORS.white}
              text="87% "
              textColor="black"
              rightChild={
                <Icon name="ios-heart" size={13} color={COLORS.pink} />
              }
            />
          </Flex>
        </LinearGradient>
      </View>
    )
  }

  handleViewableItemsChanged = ({ changed }) => {
    const currentIndex = changed[0].index
    this.setState({ currentIndex })
  }
}

export default DisplayImages
