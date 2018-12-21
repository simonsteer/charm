import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '../../interface/Icon'
import Text from '../../interface/Text'
import SectionTitle from '../../shared/SectionTitle'

const About = ({ style, text }) => (
  <View style={[styles.container, style]}>
    <SectionTitle text="About Me" rightChild={<Icon name="ios-person" />} />
    <Text>{text}</Text>
  </View>
)

About.defaultProps = {
  style: {},
  text: '',
}

export default About

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16 },
})
