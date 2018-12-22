import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import range from 'lodash/range'
import Flex from '../../interface/Flex'
import Icon from '../../interface/Icon'
import Pill from '../../interface/Pill'
import Text from '../../interface/Text'
import TextInput from '../../interface/TextInput'
import SectionTitle from '../../shared/SectionTitle'
import { COLORS } from '../../interface/constants'
import { config } from '../../interface/utils'
import { findInterests } from './constants'

export default class InterestFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interests: [],
    }
  }

  render() {
    const {
      state: { interests },
      props: { addInterest, userInterests },
    } = this

    const interestsToDisplay = interests.filter(
      ({ interest }) => !userInterests.includes(interest)
    )

    const shouldDisplayInterests = interestsToDisplay.length > 0

    return (
      <View style={{ marginBottom: 16 }}>
        {shouldDisplayInterests ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 16, height: 36 }}
          >
            {interestsToDisplay.map(({ interest }, index) => (
              <Pill
                onPress={() => addInterest(interest)}
                color="transparent"
                textColor={COLORS.darkGrey}
                key={`interest-${index}`}
                rightChild={
                  <Icon
                    color={COLORS.black}
                    name="ios-add-circle"
                    size={14}
                    style={{ paddingLeft: 8, paddingTop: 2 }}
                  />
                }
                style={{
                  marginRight: 16,
                  marginLeft: index === 0 ? 16 : 0,
                }}
                text={interest}
              />
            ))}
          </ScrollView>
        ) : (
          <Flex
            center
            style={{ paddingHorizontal: 16, marginBottom: 16, height: 36 }}
          >
            <Text bold center color="darkGrey" letterSpacing={1.5} size="small">
              SEARCH RESULTS WILL APPEAR HERE
            </Text>
          </Flex>
        )}
        <Flex row center>
          <TextInput
            placeholder="type to search for some interests"
            style={{ width: config.deviceWidth - 32 }}
            onChangeText={this.handleChangeText}
          />
        </Flex>
      </View>
    )
  }

  handleChangeText = query => {
    const searchResults = findInterests(query)
    this.setState({ interests: searchResults })
  }
}
