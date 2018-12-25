import React from 'react'
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
