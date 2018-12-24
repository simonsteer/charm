import React, { Component, Fragment } from 'react'
import AppContainer from './AppContainer'
import { connect } from 'react-redux'
import {
  getNavigation,
  getLoadingIndicator,
  getAlert,
} from '../selectors/navigation'
import { routeTo, closeAlert, openActionSheet } from '../actions/navigation'
import { setTopLevelNavigator } from './navigationService'
import LoadingIndicator from './LoadingIndicator'
import AlertRouter from './AlertRouter'

const mapStateToProps = state => ({
  navigation: getNavigation(state),
  loadingIndicator: getLoadingIndicator(state),
  alert: getAlert(state),
})

const mapDispatchToProps = {
  routeTo,
  closeAlert,
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Charm extends Component {
  componentDidMount() {
    this.props.routeTo('Profile')
  }

  render() {
    const {
      navigation,
      dispatch,
      alert,
      loadingIndicator,
      closeAlert,
    } = this.props

    return (
      <Fragment>
        <AppContainer
          ref={navigatorRef => setTopLevelNavigator(navigatorRef)}
          state={navigation}
          dispatch={dispatch}
        />
        <LoadingIndicator {...loadingIndicator} />
        <AlertRouter alert={alert} closeAlert={closeAlert} />
      </Fragment>
    )
  }
}
