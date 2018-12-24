import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '../interface/Icon'
import Text from '../interface/Text'
import TextInput from '../interface/TextInput'
import SectionTitle from '../shared/SectionTitle'
import { config } from '../interface/utils'

export default class ProfileTextSection extends Component {
  static defaultProps = {
    style: {},
    isEditMode: false,
    text: '',
    sectionTitle: '',
    sectionIconName: 'ios-person',
    placeholderText: '',
    onFocusTextInput() {},
    onBlurTextInput() {},
  }

  constructor(props) {
    super(props)
    this.state = {
      statefulText: props.text,
    }
  }

  render() {
    const {
      props: {
        style,
        isEditMode,
        text,
        sectionTitle,
        sectionIconName,
        placeholderText,
        onFocusTextInput,
        onBlurTextInput,
      },
      state: { statefulText },
    } = this

    return (
      <View style={[styles.container, style]}>
        <SectionTitle
          text={sectionTitle}
          rightChild={<Icon name={sectionIconName} />}
        />
        {isEditMode ? (
          <TextInput
            multiline
            onFocus={onFocusTextInput}
            onBlur={onBlurTextInput}
            onChangeText={this.handleChangeText}
            placeholder={placeholderText}
            value={statefulText}
            style={{ paddingTop: 12, height: config.deviceWidth / 2 }}
          />
        ) : (
          <Text>{statefulText}</Text>
        )}
      </View>
    )
  }

  handleChangeText = statefulText => this.setState({ statefulText })
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16 },
})
