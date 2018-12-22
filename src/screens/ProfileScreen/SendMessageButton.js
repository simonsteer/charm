import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../../interface/constants'
import Icon from '../../interface/Icon'
import Button from '../../interface/Button'

const SendMessageButton = ({ onPress }) => (
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
)

SendMessageButton.defaultProps = {
  onPress() {},
}

const styles = StyleSheet.create({
  button: {
    shadowOffset: { height: 12 },
    shadowColor: COLORS.black,
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  icon: { paddingTop: 2, marginLeft: 8 },
})

export default SendMessageButton
