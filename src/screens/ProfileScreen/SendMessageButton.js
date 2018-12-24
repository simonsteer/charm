import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS, interfaceStyles } from '../../interface/constants'
import Icon from '../../interface/Icon'
import Button from '../../interface/Button'
import { config } from '../../interface/utils'

const SendMessageButton = ({ routeToUserMessages }) => (
  <View style={styles.container}>
    <Button
      color="pink"
      onPress={routeToUserMessages}
      rightChild={
        <Icon name="ios-mail" color={COLORS.white} style={styles.icon} />
      }
      style={[interfaceStyles.shadow, { elevation: 4 }]}
    >
      send message
    </Button>
  </View>
)

SendMessageButton.defaultProps = {
  onPress() {},
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  icon: { paddingTop: 2, marginLeft: 8 },
})

export default SendMessageButton
