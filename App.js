import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './src/reducers/store'
import AppContainer from './src/navigation/AppContainer'
import { getApiUrl } from './src/interface/constants'

export default class App extends React.Component {
  componentDidMount() {
    console.log(getApiUrl())
    this.healthCheck()
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }

  healthCheck = async () => {
    try {
      const res = await axios.get('http://192.168.0.230:5678/healthcheck')
      console.log(res.data)
    } catch (e) {
      console.error(e)
    }
  }
}
