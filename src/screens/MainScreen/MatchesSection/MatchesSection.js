import React from 'react'
import { FlatList } from 'react-native'
import Screen from '../../../interface/Screen'
import Text from '../../../interface/Text'
import MatchSlat from './MatchSlat'
import { IPHONE_X_SAFE_BOTTOM_PADDING } from '../../../interface/constants'

const MatchesSection = ({ routeToProfile, routeToMessages }) => (
  <FlatList
    data={[
      0.25,
      0.5,
      0.75,
      1,
      1.25,
      1.5,
      1.75,
      2,
      2.25,
      2.5,
      2.75,
      3,
      3.25,
      3.5,
      3.75,
    ]}
    keyExtractor={(item, index) => `match-${index}`}
    renderItem={({ item: user, index }) => (
      <MatchSlat
        user={user}
        index={index}
        routeToProfile={() => routeToProfile(user)}
        routeToMessages={() => routeToMessages(user)}
      />
    )}
  />
)

MatchesSection.defaultProps = {
  routeToProfile() {},
  routeToMessages() {},
}

export default MatchesSection
