import React from 'react'
import { StyleSheet } from 'react-native'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import { COLORS } from '../../interface/constants'
import { config } from '../../interface/utils'

const MessageSlat = ({ isFromCurrentUser, text, index }) => {
  if (text === null || isFromCurrentUser === null) {
    return null
  }

  return (
    <Flex
      row
      justifyEnd={isFromCurrentUser}
      style={{ paddingBottom: 16, paddingTop: index === 0 ? 16 : 0 }}
    >
      <Flex
        style={[
          styles.bubble,
          {
            maxWidth: config.deviceWidth * 0.75 - 32,
            backgroundColor: isFromCurrentUser
              ? COLORS.lightBlue
              : COLORS.lightPink,
            borderColor: isFromCurrentUser ? COLORS.blue : COLORS.pink,
            borderBottomLeftRadius: isFromCurrentUser ? 16 : 0,
            borderBottomRightRadius: isFromCurrentUser ? 0 : 16,
          },
        ]}
      >
        <Text color="black">{text}</Text>
      </Flex>
    </Flex>
  )
}

MessageSlat.defaultProps = {
  isFromCurrentUser: null,
  text: null,
}

export default MessageSlat

const styles = StyleSheet.create({
  bubble: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
    padding: 16,
  },
})
