import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../interface/constants'
import Header from '../../interface/Header'
import Icon from '../../interface/Icon'

const DiscoverScreenHeader = ({ openDiscoverFilters }) => (
  <Header
    heading="Discover Matches"
    rightChild={
      <TouchableOpacity onPress={openDiscoverFilters}>
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
  />
)

DiscoverScreenHeader.defaultProps = {
  openDiscoverFilters() {},
}

export default DiscoverScreenHeader
