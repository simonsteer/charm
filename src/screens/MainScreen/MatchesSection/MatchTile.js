import React, { Fragment } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Flex from '../../../interface/Flex'
import Text from '../../../interface/Text'
import Pill from '../../../interface/Pill'
import Icon from '../../../interface/Icon'
import Avatar from '../../../shared/Avatar'
import { COLORS } from '../../../interface/constants'
import { config } from '../../../interface/utils'

const MatchTile = ({ routeToProfile, routeToMessages, user }) => (
  <Flex center style={styles.container}>
    <Text bold color="darkGrey" style={{ marginBottom: 12 }}>
      DisplayName
    </Text>
    <Avatar
      onPress={() => routeToProfile(user)}
      style={{ marginBottom: 16 }}
      size={config.deviceWidth / 2 - 64}
    />
    <Flex
      row
      spaceBetween
      style={{ position: 'absolute', left: 8, right: 8, bottom: 8 }}
    >
      <Pill
        color={COLORS.lightBlue}
        onPress={() => routeToMessages(user)}
        size="tiny"
        textColor="blue"
        text="message "
        rightChild={<Icon name="ios-mail" size={11} color={COLORS.blue} />}
      />
      <Pill
        color={COLORS.lightPink}
        size="tiny"
        textColor="pink"
        text="98% "
        rightChild={<Icon name="ios-heart" size={9} color={COLORS.pink} />}
      />
    </Flex>
  </Flex>
)

MatchTile.defaultProps = {
  routeToProfile() {},
  routeToMessages() {},
  user: null,
}

export default MatchTile

const styles = StyleSheet.create({
  container: {
    width: config.deviceWidth / 2,
    paddingHorizontal: 16,
    paddingBottom: 32,
    paddingTop: 16,
  },
})
