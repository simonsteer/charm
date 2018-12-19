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
        autoCapitalize={false}
        placeholder={placeholder}
        style={[
          styles.input,
          style,
          {
            color: COLORS.darkGrey,
            borderColor: isFocused
              ? 'rgba(0, 0, 0, 0.5)'
              : 'rgba(0, 0, 0, 0.1)',
          },
        ]}
        selectionColor={COLORS.yellow}
        onChangeText={this.handleChangeText}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        value={this.state.text}
        {...restProps}
      />
    )
  }

  handleChangeText = text => {
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
    borderRadius: 100,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
})
