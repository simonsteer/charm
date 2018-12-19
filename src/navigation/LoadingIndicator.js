import React, { Component } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import Flex from '../interface/Flex'
import Text from '../interface/Text'

MINIMUM_OPEN_DURATION = 1000

export default class LoadingIndicator extends Component {
  static defaultProps = {
    text: 'loading',
    isOpen: false,
    success: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      contentValue: new Animated.Value(1),
      elasticValue: new Animated.Value(0),
      linearValue: new Animated.Value(0),
      shouldRender: false,
      text: props.text,
    }
    this.animationDuration = 300
    this.openTimestamp = null
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.openTimestamp = +new Date()
      this.setState({ text: nextProps.text, shouldRender: true })
      this.openIndicator()
    }

    if (this.props.isOpen && !nextProps.isOpen) {
      console.log('ugh')
      this.indicateResult({ text: nextProps.text, success: nextProps.success })
    }
  }

  render() {
    const { linearValue, contentValue, shouldRender, text } = this.state

    if (!shouldRender) {
      return null
    }

    return (
      <Flex center style={StyleSheet.absoluteFill}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: 'black', opacity: this.overlayOpacity },
          ]}
        />
        <Flex
          animated
          center
          style={[
            styles.container,
            {
              transform: [{ scale: this.indicatorScale }],
              opacity: linearValue,
            },
          ]}
        >
          <Animated.View style={{ opacity: contentValue }}>
            <Text bold>{text.toUpperCase()}</Text>
          </Animated.View>
        </Flex>
      </Flex>
    )
  }

  get overlayOpacity() {
    return this.state.linearValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.3],
    })
  }

  get indicatorScale() {
    return this.state.elasticValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    })
  }

  get imageScale() {
    return this.state.contentValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    })
  }

  indicateResult = ({ text, success }) => {
    Animated.timing(this.state.contentValue, {
      toValue: 0,
      duration: 200,
    }).start(() => {
      this.setState({ text })
      Animated.timing(this.state.contentValue, {
        toValue: 1,
        duration: 200,
      }).start(this.closeIndicator)
    })
  }

  openIndicator = () =>
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
    ]).start()

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
    ]).start(() => this.setState({ shouldRender: false }))
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
  },
})
