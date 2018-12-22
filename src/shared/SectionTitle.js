import React from 'react'
import { StyleSheet } from 'react-native'
import Flex from '../interface/Flex'
import Text from '../interface/Text'
import { COLORS } from '../interface/constants'

const SectionTitle = ({ text, rightChild, style }) => (
  <Flex row spaceBetween style={[styles.container, style]}>
    <Text size="title" bold>
      {text}
    </Text>
    {!!rightChild && rightChild}
  </Flex>
)

export default SectionTitle

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    marginBottom: 16,
  },
})
