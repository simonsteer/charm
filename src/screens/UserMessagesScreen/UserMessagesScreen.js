import React, { Component } from 'react'
import Screen from '../../interface/Screen'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import UserMessagesHeader from './UserMessagesHeader'

export default class UserMessagesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  render() {
    const { messages } = this.state

    return <Screen header={<UserMessagesHeader />} />
  }
}
