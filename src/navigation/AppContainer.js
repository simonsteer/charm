import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MessagesHomeScreen from '../screens/MessagesHomeScreen'
import UserMessagesScreen from '../screens/UserMessagesScreen'
import MainScreen from '../screens/MainScreen'
import { create } from 'uuid-js'

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    MessagesHome: MessagesHomeScreen,
    UserMessages: UserMessagesScreen,
    Main: MainScreen,
  },
  {
    headerMode: 'none',
  }
)

export const AppNavigator = createStackNavigator(
  {
    Home: MainStack,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
