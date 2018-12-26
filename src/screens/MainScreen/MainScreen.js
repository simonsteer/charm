import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Screen from '../../interface/Screen'
import Button from '../../interface/Button'
import Flex from '../../interface/Flex'
import MatchesSection from './MatchesSection'
import InboxSection from './InboxSection'
import MatchesSectionHeader from './MatchesSection/MatchesSectionHeader'
import { routeTo, openMatchFilters } from '../../actions/navigation'
import TabBar from '../../shared/TabBar'
import Header from '../../interface/Header'

const TABS = {
  MATCHES: {
    NAME: 'MATCHES',
    TEXT: 'matches',
    ICON_NAME: 'ios-people',
  },
  INBOX: {
    NAME: 'INBOX',
    TEXT: 'inbox',
    ICON_NAME: 'ios-mail',
  },
  SETTINGS: {
    NAME: 'SETTINGS',
    TEXT: 'settings',
    ICON_NAME: 'ios-settings',
  },
}

const mapDispatchToProps = {
  routeToProfile: user => routeTo('Profile', user),
  routeToMessages: user => routeTo('UserMessages', user),
  openMatchFilters,
}

@connect(
  null,
  mapDispatchToProps
)
export default class MainScreen extends Component {
  state = {
    section: TABS.MATCHES.NAME,
  }

  render() {
    const { section } = this.state

    return (
      <Screen header={this.renderHeader()}>
        {this.renderSection()}
        <TabBar
          currentTabName={section}
          tabs={Object.values(TABS).map(({ NAME, TEXT, ICON_NAME }) => ({
            name: NAME,
            text: TEXT,
            iconName: ICON_NAME,
            onPress: () => this.setState({ section: NAME }),
          }))}
        />
      </Screen>
    )
  }

  renderHeader = () => {
    const {
      state: { section },
      props: { openMatchFilters, routeToProfile },
    } = this

    if (section === TABS.MATCHES.NAME) {
      return (
        <MatchesSectionHeader
          openMatchFilters={openMatchFilters}
          routeToProfile={routeToProfile}
        />
      )
    }

    if (section === TABS.INBOX.NAME) {
      return <Header heading="Messages History" />
    }

    return null
  }

  renderSection = () => {
    const {
      state: { section },
      props: { routeToProfile, routeToMessages },
    } = this

    if (section === TABS.MATCHES.NAME) {
      return (
        <MatchesSection
          routeToProfile={routeToProfile}
          routeToMessages={routeToMessages}
        />
      )
    }

    if (section === TABS.INBOX.NAME) {
      return (
        <InboxSection usersWithMessageHistory={[1, 2, 3, 4, 45, 5, 6, 6]} />
      )
    }

    return null
  }
}
