import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Screen from '../../interface/Screen'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'

export default class ProfileScreen extends Component {
  render() {
    return (
      <Screen>
        <ScrollView style={{ flex: 1, backgroundColor: 'red' }}>
          <Text>Hello world</Text>
        </ScrollView>
      </Screen>
    )
  }
}
