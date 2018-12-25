import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Flex from './Flex'
import { endcloseModal } from '../actions/navigation'
import { getModalIsClosing } from '../selectors/navigation'
import { config } from './utils'

const mapStateToProps = state => ({
  isClosing: getModalIsClosing(state),
})

const mapDispatchToProps = {
  endcloseModal,
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Modal extends Component {
  static defaultProps = {
    isClosing: false,
    isDismissable: false,
    endcloseModal() {},
    shouldCenterChildren: true,
    shouldShowOverlay: false,
    style: {},
    openAnimation() {},
    closeAnimation() {},
  }

  constructor(props) {
    super(props)
    this.overlayValue = new Animated.Value(0)
  }

  componentDidMount() {
    const { openAnimation, shouldShowOverlay } = this.props

    if (shouldShowOverlay) {
      this.showOverlay()
    }

    openAnimation()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isClosing && nextProps.isClosing) {
      this.closeModal()
    }
  }

  render() {
    const { children, shouldCenterChildren, style } = this.props

    return (
      <Flex
        center={shouldCenterChildren}
        style={[StyleSheet.absoluteFillObject, style]}
      >
        <Flex
          animated
          onPress={this.handlePressOverlay}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: 'black', opacity: this.overlayValue },
          ]}
        />
        {children}
      </Flex>
    )
  }

  handlePressOverlay = () => {
    if (this.props.isDismissable) {
      this.closeModal()
    }
  }

  closeModal = () => {
    const { closeAnimation, endcloseModal } = this.props

    this.hideOverlay()
    closeAnimation(endcloseModal)
  }

  showOverlay = () =>
    Animated.timing(this.overlayValue, {
      toValue: 0.3,
      duration: 300,
      useNativeDriver: true,
    }).start()

  hideOverlay = () =>
    Animated.timing(this.overlayValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
}
