import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'
import Screen from '../../interface/Screen'
import Text from '../../interface/Text'
import TextInput from '../../interface/TextInput'
import Flex from '../../interface/Flex'
import { COLORS } from '../../interface/constants'
import Button from '../../interface/Button'
import { userSignupRequest, userLoginRequest } from '../../actions/user'
import { emailPattern, config } from '../../interface/utils'

const mapDispatchToProps = {
  userSignupRequest,
  userLoginRequest,
}

@connect(
  null,
  mapDispatchToProps
)
export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      isSignupFlowActive: false,
      isLoginFlowActive: false,
      isTransitioning: false,
      email: '',
      password: '',
    }
    this.animatedValue = new Animated.Value(1)
    this.deviceWidth = Dimensions.get('window').width
    this.deviceHeight = Dimensions.get('window').height
  }

  render() {
    const {
      isLoginFlowActive,
      isSignupFlowActive,
      email,
      password,
    } = this.state

    const CONTENT_WIDTH = this.deviceWidth - 80

    return (
      <Screen>
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={{ height: '100%' }}
          keyboardVerticalOffset={config.isIos ? 16 : 0}
        >
          <Flex spaceBetween flex={1} style={{ marginVertical: 40 }}>
            <Text size="jumbo" bold center>
              CHARM
            </Text>
            <Flex center style={{ width: this.deviceWidth }}>
              <Animated.View style={{ opacity: this.animatedValue }}>
                {!isSignupFlowActive && !isLoginFlowActive ? (
                  <Fragment>
                    <Button
                      color="pink"
                      onPress={this.goToSignupFlow}
                      style={{ width: CONTENT_WIDTH }}
                    >
                      signup
                    </Button>
                    <Button
                      color="pink"
                      onPress={this.goToLoginFlow}
                      style={{ marginTop: 16, width: CONTENT_WIDTH }}
                    >
                      login
                    </Button>
                  </Fragment>
                ) : (
                  <Flex center>
                    <Text
                      style={{
                        width: CONTENT_WIDTH,
                        marginBottom: 4,
                      }}
                      size="small"
                    >
                      your email address:
                    </Text>
                    <TextInput
                      autoFocus
                      shouldTrim
                      onChangeText={text => this.onChangeText(text, 'email')}
                      textContentType="emailAddress"
                      placeholder={'email address'}
                      style={{ width: CONTENT_WIDTH, marginBottom: 16 }}
                    />
                    <Text
                      style={{
                        width: CONTENT_WIDTH,
                        marginBottom: 4,
                      }}
                      size="small"
                    >
                      {isSignupFlowActive
                        ? 'your desired password:'
                        : 'your password:'}
                    </Text>
                    <TextInput
                      enablesReturnKeyAutomatically
                      secureTextEntry
                      onChangeText={text => this.onChangeText(text, 'password')}
                      placeholder="password"
                      style={{ width: CONTENT_WIDTH, marginBottom: 16 }}
                      onSubmitEditing={this.handlePressLogin}
                    />
                    <Flex
                      style={{ width: CONTENT_WIDTH, marginTop: 16 }}
                      row
                      spaceBetween
                    >
                      <Button
                        style={{ width: CONTENT_WIDTH / 2 - 8 }}
                        onPress={this.returnToMainFlow}
                      >
                        back
                      </Button>
                      <Button
                        color="pink"
                        disabled={
                          !email || !password || !emailPattern.test(email)
                        }
                        onPress={
                          isSignupFlowActive
                            ? this.handlePressSignup
                            : this.handlePressLogin
                        }
                        style={{ width: CONTENT_WIDTH / 2 - 8 }}
                      >
                        {isSignupFlowActive ? 'signup' : 'login'}
                      </Button>
                    </Flex>
                  </Flex>
                )}
              </Animated.View>
            </Flex>
          </Flex>
        </KeyboardAvoidingView>
      </Screen>
    )
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    this.props.userLoginRequest({ email, password })
  }

  handlePressSignup = () => {
    const { email, password } = this.state
    this.props.userSignupRequest({ email, password })
  }

  onChangeText = (text, stateKey) => this.setState({ [stateKey]: text })

  returnToMainFlow = () => {
    if (this.isTransitioning) {
      return
    }

    this.fadeInFadeOut({
      firstCallback: () => {
        this.isTransitioning = true
        this.setState({
          isSignupFlowActive: false,
          isLoginFlowActive: false,
          password: '',
          email: '',
        })
      },
      secondCallback: () => (this.isTransitioning = false),
    })
  }

  goToSignupFlow = () => {
    if (this.isTransitioning) {
      return
    }

    this.fadeInFadeOut({
      firstCallback: () => {
        this.isTransitioning = true
        this.setState({
          isSignupFlowActive: true,
          isLoginFlowActive: false,
        })
      },
      secondCallback: () => (this.isTransitioning = false),
    })
  }

  goToLoginFlow = () => {
    if (this.isTransitioning) {
      return
    }

    this.fadeInFadeOut({
      firstCallback: () => {
        this.isTransitioning = true
        this.setState({
          isSignupFlowActive: false,
          isLoginFlowActive: true,
        })
      },
      secondCallback: () => (this.isTransitioning = false),
    })
  }

  fadeInFadeOut = ({
    firstCallback = () => {},
    secondCallback = () => {},
  } = {}) =>
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      firstCallback()
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(secondCallback)
    })
}
