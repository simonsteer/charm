import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '../../interface/Icon'
import Text from '../../interface/Text'
import TextInput from '../../interface/TextInput'
import SectionTitle from '../../shared/SectionTitle'

export default class About extends Component {
  static defaultProps = {
    style: {},
    text: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.text,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isEditMode && this.props.isEditMode) {
      this.setState({ value: nextProps.text })
    }
  }

  render() {
    const {
      props: { style, isEditMode, text },
      state: { value },
    } = this

    return (
      <View style={[styles.container, style]}>
        <SectionTitle text="About Me" rightChild={<Icon name="ios-person" />} />
        {isEditMode ? (
          <TextInput
            multiline={true}
            onChangeText={this.handleChangeText}
            placeholder="write something about yourself!"
            value={value}
            style={{ paddingTop: 12 }}
          />
        ) : (
          <Text style={{ padding: 12 }}>{text}</Text>
        )}
      </View>
    )
  }

  handleChangeText = value => this.setState({ value })
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16 },
})
