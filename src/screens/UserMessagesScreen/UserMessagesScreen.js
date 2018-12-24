import React, { Component } from 'react'
import { FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native'
import Screen from '../../interface/Screen'
import UserMessagesHeader from './UserMessagesHeader'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import Button from '../../interface/Button'
import TextInput from '../../interface/TextInput'
import MessageSlat from './MessageSlat'
import { COLORS } from '../../interface/constants'
import { config } from '../../interface/utils'

const MOCK_MESSAGES = [
  {
    isFromCurrentUser: true,
    text: 'Hey how are you?',
  },
  {
    isFromCurrentUser: true,
    text: 'Nice profile 💖',
  },
  {
    isFromCurrentUser: false,
    text: "Omg I'm like......soooo goood!!!! how r U??? 😜😜",
  },
  {
    isFromCurrentUser: true,
    text: 'Nevermind bye',
  },
]

export default class UserMessagesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasReachedFirstMessage: false,
      messages: MOCK_MESSAGES,
      messageText: '',
    }
  }

  render() {
    const { messages } = this.state

    return (
      <Screen header={<UserMessagesHeader />}>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          data={messages}
          keyExtractor={(item, index) => `message-${index}`}
          renderItem={this.renderMessages}
          ListHeaderComponent={this.renderHeaderComponent}
        />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={config.isIos ? 48 : 0}
        >
          <Flex row style={styles.footer}>
            <TextInput
              onChangeText={messageText => this.setState({ messageText })}
              multiline
              style={[
                styles.textInput,
                { maxHeight: config.deviceHeight * 0.2 },
              ]}
            />
            <Flex justifyEnd>
              <Button
                disabled={!this.canSendMessage}
                onPress={this.sendMessage}
                color="pink"
              >
                send
              </Button>
            </Flex>
          </Flex>
        </KeyboardAvoidingView>
      </Screen>
    )
  }

  get canSendMessage() {
    return !!this.state.messageText.trim()
  }

  sendMessage = () => {
    console.log(`SENDING MESSAGE: ${this.state.messageText}`)
  }

  renderMessages = ({ item: message, index }) => (
    <MessageSlat {...message} index={index} />
  )

  renderHeaderComponent = () => (
    <Text
      center
      color="darkGrey"
      lineHeight={18}
      size="small"
      style={{ marginVertical: 16, paddingHorizontal: 32 }}
    >
      This is the beginning of your message history with DisplayName.
    </Text>
  )
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.5)',
  },
  textInput: {
    flex: 1,
    paddingTop: 12,
    marginRight: 16,
  },
})
