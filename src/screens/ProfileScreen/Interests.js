import React, { Component } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import Flex from '../../interface/Flex'
import Icon from '../../interface/Icon'
import Pill from '../../interface/Pill'
import Text from '../../interface/Text'
import SectionTitle from '../../shared/SectionTitle'
import { COLORS } from '../../interface/constants'
import InterestFinder from './InterestFinder'
import { config } from '../../interface/utils'

export default class Interests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interests: props.interests,
    }
  }

  render() {
    const {
      props: { style, isEditMode },
      state: { interests },
    } = this

    const shouldShowInterestsEducation = interests.length === 0 && isEditMode

    return (
      <View style={[styles.container, { width: config.deviceWidth }, style]}>
        <SectionTitle
          text="My interests"
          rightChild={<Icon name="ios-book" />}
          style={[{ marginHorizontal: 16 }, style]}
        />
        {!!isEditMode && (
          <InterestFinder
            userInterests={interests}
            addInterest={this.addInterest}
          />
        )}
        <Flex
          animated
          row
          wrap
          style={{ overflow: 'hidden', paddingHorizontal: 16 }}
        >
          {interests.map((interest, index) => (
            <Pill
              color={COLORS.mediumGrey}
              key={`interest-${index}`}
              onPress={isEditMode ? () => this.removeInterest(interest) : null}
              rightChild={
                isEditMode && (
                  <Icon
                    color={COLORS.white}
                    name="ios-close-circle"
                    size={14}
                    style={{ paddingLeft: 8 }}
                  />
                )
              }
              style={{
                marginRight: index === interests.length - 1 ? 0 : 16,
                marginBottom: 16,
              }}
              text={interest}
            />
          ))}
          {shouldShowInterestsEducation && (
            <Text
              bold
              center
              color="darkGrey"
              size="small"
              style={{ paddingHorizontal: 32 }}
              lineHeight={18}
            >
              Add some interests to your profile! Interests are used to estimate
              match probability with other people.
            </Text>
          )}
        </Flex>
      </View>
    )
  }

  removeInterest = interest => {
    const interests = this.state.interests.filter(item => item !== interest)
    this.setState({ interests })
  }

  addInterest = interest => {
    const interests = this.state.interests.concat(interest)
    this.setState({ interests })
  }
}

const styles = StyleSheet.create({
  container: { paddingVertical: 16, marginBottom: 16 },
})
