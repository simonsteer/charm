import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../interface/constants'
import Icon from '../../interface/Icon'
import Button from '../../interface/Button'

const SendMessageButton = ({ onPress }) => (
  <View style={styles.container}>
    <Button
      color="pink"
      onPress={onPress}
      rightChild={
        <Icon name="ios-mail" color={COLORS.white} style={styles.icon} />
      }
      style={styles.button}
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
  button: {
    shadowOffset: { height: 12 },
    shadowColor: COLORS.black,
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  icon: { paddingTop: 2, marginLeft: 8 },
})

export default SendMessageButton
