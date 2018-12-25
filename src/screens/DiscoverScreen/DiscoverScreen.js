import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import {
  openDiscoverFilters,
  routeTo,
  openSnack,
} from '../../actions/navigation'
import Screen from '../../interface/Screen'
import Text from '../../interface/Text'
import DiscoverScreenHeader from './DiscoverScreenHeader'
import DiscoverSlat from './DiscoverSlat'
import { IPHONE_X_SAFE_BOTTOM_PADDING } from '../../interface/constants'
import Snack from '../../navigation/Snack'

const mapDispatchToProps = {
  openDiscoverFilters,
  openSnack,
  routeToProfile: user => routeTo('Profile', user),
  routeToMessages: user => routeTo('UserMessages', user),
}

@connect(
  null,
  mapDispatchToProps
)
export default class DiscoverScreen extends Component {
  componentDidMount() {
    this.props.openSnack({
      message: 'DisplayName sent you a new message!',
      ctaText: 'see message',
      ctaOnPress: () => setTimeout(this.props.routeToMessages, 200),
    })
  }

  render() {
    const { openDiscoverFilters, routeToProfile, routeToMessages } = this.props

    return (
      <Screen
        header={
          <DiscoverScreenHeader openDiscoverFilters={openDiscoverFilters} />
        }
        useBottomPadding={false}
      >
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
            <DiscoverSlat
              user={user}
              index={index}
              routeToProfile={() => routeToProfile(user)}
              routeToMessages={() => routeToMessages(user)}
            />
          )}
          contentContainerStyle={{
            paddingBottom: IPHONE_X_SAFE_BOTTOM_PADDING + 16,
          }}
        />
        <Snack />
      </Screen>
    )
  }
}
