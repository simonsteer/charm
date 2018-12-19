import React, { Component } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import Flex from '../interface/Flex'
import Text from '../interface/Text'

export default class LoadingIndicator extends Component {
  static defaultProps = {
    text: 'loading',
    isOpen: false,
    success: null,
  }

  constructor() {
    super()
    this.state = {
      elasticValue: new Animated.Value(0),
      linearValue: new Animated.Value(0),
      shouldRender: false,
    }
    this.animationDuration = 300
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.setState({ shouldRender: true })
      this.openIndicator()
    }

    if (this.props.isOpen && !nextProps.isOpen) {
      this.closeIndicator(() => this.setState({ shouldRender: false }))
    }
  }

  render() {
    const {
      state: { linearValue, elasticValue, shouldRender },
      props: { text, isOpen },
    } = this

    if (!shouldRender) {
      return null
    }

    const scale = elasticValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    })

    const opacity = linearValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.3],
    })

    return (
      <Flex center style={StyleSheet.absoluteFill}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: 'black', opacity },
          ]}
        />
        <Flex
          animated
          center
          style={[
            styles.container,
            { transform: [{ scale }], opacity: linearValue },
          ]}
        >
          <Text>{text.toUpperCase()}</Text>
        </Flex>
      </Flex>
    )
  }

  openIndicator = callback =>
    Animated.parallel([
      Animated.timing(this.state.elasticValue, {
        toValue: 1,
        duration: this.animationDuration,
        easing: Easing.elastic(),
        useNativeDriver: true,
      }),
      Animated.timing(this.state.linearValue, {
        toValue: 1,
        duration: this.animationDuration,
        useNativeDriver: true,
      }),
    ]).start(callback)

  closeIndicator = callback =>
    Animated.parallel([
      Animated.timing(this.state.elasticValue, {
        toValue: 0,
        duration: this.animationDuration,
        easing: Easing.back(),
        useNativeDriver: true,
      }),
      Animated.timing(this.state.linearValue, {
        toValue: 0,
        duration: this.animationDuration,
        useNativeDriver: true,
      }),
    ]).start(callback)
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
  },
})
