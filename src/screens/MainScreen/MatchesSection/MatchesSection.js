import React, { Fragment } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import chunk from 'lodash/chunk'
import Screen from '../../../interface/Screen'
import Flex from '../../../interface/Flex'
import MatchTile from './MatchTile'
import Hairline from '../../../interface/Hairline'
import { config } from '../../../interface/utils'

const MatchesSection = ({ routeToProfile, routeToMessages }) => (
  <FlatList
    data={chunk(
      [
        0.25,
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        1.75,
        2,
        2.25,
        2.5,
        2.75,
        3,
        3.25,
        3.5,
        3.75,
      ],
      2
    )}
    keyExtractor={(item, index) => `match-${index}`}
    renderItem={({ item, index }) => (
      <Fragment>
        {index !== 0 && <Hairline style={{ width: config.deviceWidth }} />}
        <Flex row>
          {item.map((user, rowIndex) => (
            <Fragment>
              <TouchableOpacity onPress={() => routeToProfile(user)}>
                <MatchTile
                  routeToProfile={routeToProfile}
                  routeToMessages={routeToMessages}
                  user={user}
                />
              </TouchableOpacity>
              {rowIndex === 0 && <Hairline vertical />}
            </Fragment>
          ))}
        </Flex>
      </Fragment>
    )}
  />
)

MatchesSection.defaultProps = {
  routeToProfile() {},
  routeToMessages() {},
}

export default MatchesSection
