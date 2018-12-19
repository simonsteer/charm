import React, { Component, Fragment } from 'react'
import AppContainer from './AppContainer'
import { connect } from 'react-redux'
import {
  getNavigation,
  getLoadingIndicator,
  getAlert,
} from '../selectors/navigation'
import LoadingIndicator from './LoadingIndicator'

const mapStateToProps = state => ({
  navigation: getNavigation(state),
  loadingIndicator: getLoadingIndicator(state),
  alert: getAlert(state),
})
@connect(mapStateToProps)
export default class Charm extends Component {
  render() {
    const { navigation, dispatch, alert, loadingIndicator } = this.props

    return (
      <Fragment>
        <AppContainer state={navigation} dispatch={dispatch} />
        <LoadingIndicator {...loadingIndicator} />
      </Fragment>
    )
  }
}
