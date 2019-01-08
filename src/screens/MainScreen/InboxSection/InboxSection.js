import React from 'react'
import { FlatList, View, TouchableOpacity } from 'react-native'
import chunk from 'lodash/chunk'
import Avatar from '../../../shared/Avatar'
import Flex from '../../../interface/Flex'
import Text from '../../../interface/Text'
import Hairline from '../../../interface/Hairline'
import { config } from '../../../interface/utils'

const InboxSection = ({
  usersWithMessageHistory,
  routeToProfile,
  routeToMessages,
}) => (
  <FlatList
    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
    data={usersWithMessageHistory}
    keyExtractor={(_, index) => `inbox-avatar-${index}`}
    renderItem={({ item: user, index }) => {
      const hasNewMessages = Math.random() > 0.5

      return (
        <View>
          {index !== 0 && <Hairline />}
          <TouchableOpacity onPress={() => routeToMessages(user)}>
            <Flex row style={{ paddingVertical: 16 }}>
              <Avatar onPress={() => routeToProfile(user)} />
              <Flex spaceBetween style={{ marginLeft: 16 }}>
                <Text bold color={hasNewMessages ? 'darkGrey' : 'darkGrey'}>
                  DisplayName
                </Text>
                <Text
                  bold={hasNewMessages}
                  color={hasNewMessages ? 'blue' : 'mediumGrey'}
                  numberOfLines={2}
                  size="small"
                  style={{ width: config.deviceWidth * 0.75 - 16 }}
                >
                  lorem ipsum solor dolem it ergo exitur fenrir dorso lo solim
                  ipsum computor dolem it ergo exitur fenrir dorso
                </Text>
              </Flex>
            </Flex>
          </TouchableOpacity>
        </View>
      )
    }}
  />
)

InboxSection.defaultProps = {
  usersWithMessageHistory: [],
  routeToProfile() {},
  routeToMessages() {},
}

export default InboxSection
