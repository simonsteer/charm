import React, { Component, Fragment } from 'react'
import AppContainer from './AppContainer'
import { connect } from 'react-redux'
import {
  getNavigation,
  getLoadingIndicator,
  getAlert,
} from '../selectors/navigation'
import { routeTo } from '../actions/navigation'
import { setTopLevelNavigator } from './navigationService'
import LoadingIndicator from './LoadingIndicator'

const mapStateToProps = state => ({
  navigation: getNavigation(state),
  loadingIndicator: getLoadingIndicator(state),
  alert: getAlert(state),
})
@connect(mapStateToProps)
export default class Charm extends Component {
  componentDidMount() {
    this.props.dispatch(routeTo('Profile'))
  }

  render() {
    const { navigation, dispatch, alert, loadingIndicator } = this.props

    return (
      <Fragment>
        <AppContainer
          ref={navigatorRef => setTopLevelNavigator(navigatorRef)}
          state={navigation}
          dispatch={dispatch}
        />
        <LoadingIndicator {...loadingIndicator} />
      </Fragment>
    )
  }
}
