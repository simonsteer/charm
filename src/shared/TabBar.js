import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Flex from '../interface/Flex'
import Icon from '../interface/Icon'
import Text from '../interface/Text'
import { COLORS } from '../interface/constants'

const TabBar = ({ tabs, currentTabName }) => {
  return (
    <Flex row spaceBetween style={styles.tabBar}>
      {tabs.map(({ name, text, iconName, onPress }, index) => (
        <TouchableOpacity key={`tab-item-${index}`} onPress={onPress}>
          <Flex center>
            <Icon
              color={name === currentTabName ? COLORS.pink : COLORS.mediumGrey}
              name={iconName}
            />
            <Text
              bold
              color={name === currentTabName ? 'pink' : 'mediumGrey'}
              size="small"
            >
              {text.toUpperCase()}
            </Text>
          </Flex>
        </TouchableOpacity>
      ))}
    </Flex>
  )
}

TabBar.defaultProps = {
  tabs: [],
}

export default TabBar

const styles = StyleSheet.create({
  tabBar: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.5)',
  },
})
