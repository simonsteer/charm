import React, { Component, Fragment } from 'react'
import AppContainer from './AppContainer'
import { connect } from 'react-redux'
import { setTopLevelNavigator } from './navigationService'
import {
  getNavigation,
  getLoadingIndicator,
  getModal,
} from '../selectors/navigation'
import { closeModal, routeTo } from '../actions/navigation'
import LoadingIndicator from './LoadingIndicator'
import ModalRouter from './ModalRouter'

const mapStateToProps = state => ({
  navigation: getNavigation(state),
  modal: getModal(state),
  loadingIndicator: getLoadingIndicator(state),
})

const mapDispatchToProps = {
  closeModal,
  routeTo,
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Charm extends Component {
  componentDidMount() {
    this.props.routeTo('Discover')
  }

  render() {
    const { navigation, modal, closeModal, loadingIndicator } = this.props

    return (
      <Fragment>
        <AppContainer ref={setTopLevelNavigator} state={navigation} />
        <ModalRouter modal={modal} closeModal={closeModal} />
        <LoadingIndicator {...loadingIndicator} />
      </Fragment>
    )
  }
}
