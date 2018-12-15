import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './src/reducers/store'
import AppContainer from './src/navigation/AppContainer'
import { getApiUrl } from './src/interface/constants'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
