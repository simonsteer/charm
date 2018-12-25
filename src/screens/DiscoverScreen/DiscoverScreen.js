import React, { Component } from 'react'
import { connect } from 'react-redux'
import DiscoverScreenHeader from './DiscoverScreenHeader'
import Screen from '../../interface/Screen'
import Text from '../../interface/Text'
import { openDiscoverFilters } from '../../actions/navigation'

const mapDispatchToProps = {
  openDiscoverFilters,
}

@connect(
  null,
  mapDispatchToProps
)
export default class DiscoverScreen extends Component {
  render() {
    const { openDiscoverFilters } = this.props
    return (
      <Screen
        center
        header={
          <DiscoverScreenHeader openDiscoverFilters={openDiscoverFilters} />
        }
      >
        <Text>💋</Text>
      </Screen>
    )
  }
}
