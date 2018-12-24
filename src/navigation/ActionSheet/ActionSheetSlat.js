import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Flex from '../../interface/Flex'
import Text from '../../interface/Text'
import { COLORS } from '../../interface/constants'
import { config } from '../../interface/utils'

const ActionSheetSlat = ({ option, index }) => (
  <View key={`action-sheet-option-${index}`}>
    {index !== 0 && (
      <View
        style={{
          width: config.deviceWidth - 64,
          borderTopWidth: index !== 0 ? StyleSheet.hairlineWidth : 0,
          borderColor: COLORS.pink,
        }}
      />
    )}
    <TouchableOpacity onPress={option.onPress}>
      <Flex
        center
        key={`action-sheet-option-${index}`}
        style={{
          width: config.deviceWidth - 64,
          height: 44,
        }}
      >
        <Text size="title" color="darkGrey">
          {option.title}
        </Text>
      </Flex>
    </TouchableOpacity>
  </View>
)

export default ActionSheetSlat
