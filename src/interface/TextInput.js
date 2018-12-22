import React, { Component } from 'react'
import omit from 'lodash/omit'
import { StyleSheet, TextInput as RNTextInput } from 'react-native'
import { COLORS } from './constants'

export default class TextInput extends Component {
  static defaultProps = {
    onChangeText() {},
    onBlur() {},
    onFocus() {},
    style: {},
    placeholder: '',
    shouldTrim: false,
  }

  state = {
    text: '',
    isFocused: false,
  }

  render() {
    const {
      props: { style, placeholder },
      state: { isFocused },
    } = this

    const restProps = omit(this.props, [
      'onChangeText',
      'onBlur',
      'onFocus',
      'style',
      'placeholder',
    ])

    return (
      <RNTextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        style={[
          styles.input,
          style,
          {
            color: COLORS.darkGrey,
            borderColor: isFocused ? COLORS.black : 'rgba(0, 0, 0, 0.3)',
          },
        ]}
        selectionColor={COLORS.pink}
        onChangeText={this.handleChangeText}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        value={this.state.text}
        {...restProps}
      />
    )
  }

  handleChangeText = value => {
    const { shouldTrim } = this.props

    let text = value
    if (shouldTrim) {
      text = value.trim()
    }

    this.setState({ text })
    this.props.onChangeText(text)
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
    this.props.onBlur()
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
    this.props.onFocus()
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    fontSize: 16,
    letterSpacing: 0.75,
    padding: 12,
  },
})
