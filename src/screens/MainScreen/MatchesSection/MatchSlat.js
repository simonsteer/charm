import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import Flex from '../../../interface/Flex'
import { config } from '../../../interface/utils'
import { COLORS } from '../../../interface/constants'
import Hairline from '../../../interface/Hairline'
import Pill from '../../../interface/Pill'
import Icon from '../../../interface/Icon'
import Text from '../../../interface/Text'
import Avatar from '../../../shared/Avatar'

const MatchSlat = ({ user, index, routeToProfile, routeToMessages }) => {
  if (!user) {
    return null
  }

  return (
    <View style={{ paddingHorizontal: 16 }}>
      {index !== 0 && <Hairline />}
      <Flex row center style={{ paddingVertical: 16 }}>
        <Avatar onPress={routeToProfile} />
        <Flex
          row
          spaceBetween
          style={{ marginLeft: 16, flex: 1, height: '100%' }}
        >
          <Flex flex={1} spaceBetween alignStart>
            <TouchableOpacity onPress={routeToProfile}>
              <Text bold color="darkGrey">
                DisplayName
              </Text>
            </TouchableOpacity>
            <Text bold size="title" color="pink">
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

MatchSlat.defaultProps = {
  user: null,
  index: 0,
  routeToProfile() {},
  routeToMessages() {},
}

export default MatchSlat
