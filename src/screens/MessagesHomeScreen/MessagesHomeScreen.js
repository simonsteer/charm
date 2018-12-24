import React, { Component } from 'react'
import Screen from '../../interface/Screen'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import MessagesHomeHeader from './MessagesHomeHeader'

export default class MessagesHomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  render() {
    const { messages } = this.state

    return (
      <Screen header={<MessagesHomeHeader />}>
        {messages.map(message => (
          <Flex row center>
            <Text>message</Text>
          </Flex>
        ))}
      </Screen>
    )
  }
}
