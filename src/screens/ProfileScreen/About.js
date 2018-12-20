import React from 'react'
import { View } from 'react-native'
import { config } from '../../interface/utils'
import Text from '../../interface/Text'
import { COLORS } from '../../interface/constants'

const About = () => (
  <View style={{ padding: 16 }}>
    <View
      style={{
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: COLORS.black,
      }}
    >
      <Text size="title" bold>
        About Me
      </Text>
    </View>
    <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore `}</Text>
  </View>
)

export default About
