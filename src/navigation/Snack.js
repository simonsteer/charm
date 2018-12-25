import React, { Component } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { getSnack } from '../selectors/navigation'
import { closeSnack } from '../actions/navigation'
import { COLORS } from '../interface/constants'
import Flex from '../interface/Flex'
import Pill from '../interface/Pill'
import Text from '../interface/Text'
import { config } from '../interface/utils'

const mapStateToProps = state => ({ snack: getSnack(state) })
const mapDispatchToProps = { closeSnack }

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Snack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snack: props.snack,
      shouldRender: false,
      translateY: new Animated.Value(-64),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.snack.isOpen && nextProps.snack.isOpen) {
      this.setState({ shouldRender: true, snack: nextProps.snack })
      this.openSnack()

      if (!this.props.snack.requiresInteraction) {
        setTimeout(this.handleCloseSnack, 5000)
      }
    }

    if (this.props.snack.isOpen && !nextProps.snack.isOpen) {
      this.handleCloseSnack()
    }
  }

  render() {
    if (!this.state.shouldRender) {
      return null
    }

    const { translateY, snack } = this.state

    if (!snack) {
      return null
    }

    return (
      <View style={[styles.container, { top: config.isIos ? 56 : 88 }]}>
        <Flex
          animated
          row
          alignCenter
          spaceBetween
          flex={1}
          style={{
            transform: [{ translateY }],
            backgroundColor: COLORS.blue,
            paddingHorizontal: 16,
          }}
        >
          <Text
            bold
            color="white"
            size="small"
            style={{ maxWidth: config.deviceWidth / 2 }}
          >
            {snack.message}
          </Text>
          <Pill
            size="tiny"
            onPress={this.handlePressCta}
            color="white"
            textColor="blue"
            text={snack.ctaText}
          />
        </Flex>
      </View>
    )
  }

  handlePressCta = () => {
    this.state.snack.ctaOnPress()
    this.props.closeSnack()
  }

  handleCloseSnack = () =>
    this.closeSnack(() => this.setState({ shouldRender: false, snack: null }))

  openSnack = () =>
    Animated.timing(this.state.translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()

  closeSnack = callback =>
    Animated.timing(this.state.translateY, {
      toValue: -64,
      duration: 200,
      useNativeDriver: true,
    }).start(callback)
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    position: 'absolute',
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
})
