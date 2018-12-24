import React from 'react'
import { COLORS } from '../../interface/constants'
import Header from '../../interface/Header'
import Icon from '../../interface/Icon'

const UserMessagesHeader = ({ userDisplayName }) => (
  <Header
    heading={userDisplayName}
    moreOptions={[
      {
        title: 'Block user',
        onPress: () => console.log('BLOCKING USER'),
      },
      {
        title: 'Mute user',
        onPress: () => console.log('MUTING USER'),
      },
      {
        title: 'Hide user',
        onPress: () => console.log('HIDING USER'),
      },
    ]}
  />
)

UserMessagesHeader.defaultProps = {
  userDisplayName: '',
}

export default UserMessagesHeader
