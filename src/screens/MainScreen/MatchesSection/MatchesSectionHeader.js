import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../../interface/constants'
import Header from '../../../interface/Header'
import Icon from '../../../interface/Icon'

const MatchesSectionHeader = ({ openMatchFilters, routeToProfile }) => (
  <Header
    heading="Discover Matches"
    rightChild={
      <TouchableOpacity onPress={openMatchFilters}>
        <Icon
          name="ios-options"
          circle
          color={COLORS.white}
          style={{
            backgroundColor: COLORS.pink,
            paddingTop: 1,
            paddingLeft: 1,
          }}
        />
      </TouchableOpacity>
    }
    leftChild={
      <TouchableOpacity onPress={routeToProfile}>
        <Icon
          name="ios-person"
          circle
          color={COLORS.white}
          style={{ backgroundColor: COLORS.pink }}
        />
      </TouchableOpacity>
    }
  />
)

MatchesSectionHeader.defaultProps = {
  openMatchFilters() {},
  routeToProfile() {},
}

export default MatchesSectionHeader
