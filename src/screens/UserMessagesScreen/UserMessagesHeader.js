import React from 'react'
import { TouchableOpacity } from 'react-native'
import Header from '../../interface/Header'
import Icon from '../../interface/Icon'
import Text from '../../interface/Text'

const UserMessagesHeader = ({ userDisplayName, routeToProfile }) => (
  <Header
    heading={
      <TouchableOpacity onPress={routeToProfile}>
        <Text bold>{userDisplayName}</Text>
      </TouchableOpacity>
    }
    moreOptions={[
      {
        title: 'Block user',
        onPress: () => console.log('BLOCKING USER'),
      },
      {
        title: 'Hide user',
        onPress: () => console.log('HIDING USER'),
      },
      {
        title: 'Report user',
        onPress: () => console.log('REPORTING USER'),
      },
    ]}
  />
)

UserMessagesHeader.defaultProps = {
  userDisplayName: '',
}

export default UserMessagesHeader
