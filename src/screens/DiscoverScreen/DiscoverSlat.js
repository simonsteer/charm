import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import Flex from '../../interface/Flex'
import { config } from '../../interface/utils'
import { COLORS } from '../../interface/constants'
import Hairline from '../../interface/Hairline'
import Pill from '../../interface/Pill'
import Icon from '../../interface/Icon'
import Text from '../../interface/Text'

const DiscoverSlat = ({ user, index, routeToProfile, routeToMessages }) => {
  if (!user) {
    return null
  }

  const avatarSize = config.deviceWidth * 0.25 - 32

  return (
    <View style={{ paddingHorizontal: 16 }}>
      {index !== 0 && <Hairline />}
      <Flex row style={{ paddingVertical: 16 }}>
        <TouchableOpacity onPress={routeToProfile}>
          <Flex
            style={[
              styles.avatarContainer,
              { width: avatarSize, borderRadius: avatarSize / 2 },
            ]}
          >
            <Image
              resizeMode="cover"
              source={{
                uri: `https://picsum.photos/${user * 100}/${user * 100}`,
              }}
              style={styles.avatar}
            />
          </Flex>
        </TouchableOpacity>
        <Flex row spaceBetween style={{ marginLeft: 16, flex: 1 }}>
          <Flex spaceBetween alignStart>
            <TouchableOpacity onPress={routeToProfile}>
              <Text bold color="darkGrey">
                DisplayName
              </Text>
            </TouchableOpacity>
            <Text
              bold
              size="jumbo"
              color="pink"
              style={{ alignSelf: 'center', marginTop: 8 }}
            >
              {`${Math.round(user * 15)}%`}
            </Text>
          </Flex>
          <View>
            <Pill
              color={COLORS.lightBlue}
              onPress={routeToMessages}
              size="tiny"
              text="message "
              textColor="blue"
              rightChild={
                <Icon
                  name="ios-mail"
                  size={11}
                  color={COLORS.blue}
                  style={{ paddingTop: 1 }}
                />
              }
            />
          </View>
        </Flex>
      </Flex>
    </View>
  )
}

DiscoverSlat.defaultProps = {
  user: null,
  index: 0,
  routeToProfile() {},
  routeToMessages() {},
}

export default DiscoverSlat

const styles = StyleSheet.create({
  avatarContainer: {
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.3)',
    overflow: 'hidden',
  },
  avatar: { flex: 1, aspectRatio: 1 },
})
