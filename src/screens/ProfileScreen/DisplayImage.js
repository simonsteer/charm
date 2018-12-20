import React from 'react'
import { ImageBackground, FlatList, View } from 'react-native'
import { LinearGradient } from 'expo'
import { config } from '../../interface/utils'
import Text from '../../interface/Text'
import Flex from '../../interface/Flex'
import { COLORS } from '../../interface/constants'

const DisplayImage = ({ images }) => (
  <View>
    <FlatList
      horizontal
      data={images}
      snapToInterval={config.deviceWidth}
      renderItem={({ item, index }) => (
        <ImageBackground
          style={{ aspectRatio: 1, width: config.deviceWidth }}
          source={{ uri: item }}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', COLORS.black]}
            style={{
              height: '33%',
              width: config.deviceWidth,
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          />
        </ImageBackground>
      )}
    />
    <Flex
      style={{
        position: 'absolute',
        bottom: 0,
        padding: 16,
        width: config.deviceWidth,
      }}
      row
      spaceBetween
    >
      <Text bold size="large" color="white">
        DisplayName
      </Text>
      <Text bold size="large" color="white">
        87% ❤️
      </Text>
    </Flex>
  </View>
)

export default DisplayImage
