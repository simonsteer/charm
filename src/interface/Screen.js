import React, { Fragment } from 'react'
import { View, Dimensions, Platform } from 'react-native'
import Flex from './Flex'
import { config } from './utils'
import { IPHONE_X_SAFE_BOTTOM_PADDING } from './constants'
import StickyFooter from '../shared/StickyFooter'

const Screen = ({
  children,
  header,
  color,
  useBottomPadding,
  stickyFooterComponent,
  ...flexProps
}) => (
  <Fragment>
    <View
      style={{
        width: Dimensions.get('window').width,
        flex: 1,
        paddingTop: config.isIphoneX ? 44 : 0,
        paddingBottom: useBottomPadding ? IPHONE_X_SAFE_BOTTOM_PADDING : 0,
        backgroundColor: color,
      }}
    >
      <Flex
        flex={1}
        style={{
          paddingTop: header ? (config.isIphoneX ? 56 : 88) : 0,
          width: config.deviceWidth,
        }}
        {...flexProps}
      >
        {children}
      </Flex>
      {!!header && header}
    </View>
    {!!stickyFooterComponent && (
      <StickyFooter>{stickyFooterComponent}</StickyFooter>
    )}
  </Fragment>
)

Screen.defaultProps = {
  center: false,
  children: null,
  color: 'white',
  useBottomPadding: true,
}

export default Screen
