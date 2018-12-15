import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../onboarding/HomeScreen'

const OnboardStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  }
)

const AppNavigator = createStackNavigator(
  {
    Home: OnboardStack,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
