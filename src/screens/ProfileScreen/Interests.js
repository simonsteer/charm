import React from 'react'
import { View, StyleSheet } from 'react-native'
import Flex from '../../interface/Flex'
import Icon from '../../interface/Icon'
import Pill from '../../interface/Pill'
import SectionTitle from '../../shared/SectionTitle'

const Interests = ({ interests, style }) => (
  <View style={[styles.container, style]}>
    <SectionTitle text="My Interests" rightChild={<Icon name="ios-book" />} />
    <Flex row wrap style={{ overflow: 'hidden' }}>
      {interests.map((interest, index) => (
        <Pill
          key={`interest-${index}`}
          style={{
            marginRight: index === interests.length - 1 ? 0 : 16,
            marginBottom: 16,
          }}
          text={interest}
        />
      ))}
    </Flex>
  </View>
)

export default Interests

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16 },
})
