import React from 'react'
import { Provider } from 'react-redux'
import store from './src/reducers/store'
import Charm from './src/navigation/Charm'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Charm />
      </Provider>
    )
  }
}
