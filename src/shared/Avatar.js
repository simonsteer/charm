import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import Flex from '../interface/Flex'
import { config } from '../interface/utils'

const Avatar = ({ size, user, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Flex
      style={[
        styles.avatarContainer,
        {
          width: size || config.deviceWidth * 0.25 - 32,
          borderRadius: 8,
        },
        style,
      ]}
    >
      <Image
        resizeMode="cover"
        source={{ uri: user.images[0].uri }}
        style={styles.avatar}
      />
    </Flex>
  </TouchableOpacity>
)

Avatar.defaultProps = {
  size: null,
  user: {
    images: [{ position: 0, uri: 'https://picsum.photos/150/150' }],
  },
  onPress() {},
  style: {},
}

export default Avatar

const styles = StyleSheet.create({
  avatarContainer: {
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.3)',
    overflow: 'hidden',
  },
  avatar: { flex: 1, aspectRatio: 1 },
})
