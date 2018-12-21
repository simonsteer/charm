import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native'
import range from 'lodash/range'
import Flex from '../../../interface/Flex'
import { config } from '../../../interface/utils'
import { COLORS } from '../../../interface/constants'
import Icon from '../../../interface/Icon'
import Text from '../../../interface/Text'

const DELETE_HIT_SLOP = { top: 10, right: 10, bottom: 10, left: 10 }

export default class GalleryEdit extends Component {
  static defaultProps = {
    images: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      images: props.images,
      currentIndex: null,
      nextIndex: null,
      isAnimating: false,
    }
    this.currentValue = new Animated.ValueXY({ x: 0, y: 0 })
    this.nextValue = new Animated.ValueXY({ x: 0, y: 0 })
    this.shouldUpdate = true
  }

  render() {
    const { images, currentIndex, nextIndex, isAnimating } = this.state
    const { currentTransforms, nextTransforms } = this.transforms

    return (
      <Flex row spaceBetween wrap style={styles.container}>
        {images.map((image, index) => {
          const isCurrent = index === currentIndex
          const isNext = index === nextIndex
          const isSelected = index === currentIndex || index === nextIndex

          return (
            <TouchableWithoutFeedback
              key={`gallery-edit-image-${index}`}
              onPress={() => this.handleSelectImage(index)}
            >
              <Animated.View
                style={[
                  styles.imageWrapper,
                  {
                    zIndex: isSelected ? 99 : 0,
                    transform:
                      isAnimating && isCurrent
                        ? currentTransforms
                        : isAnimating && isNext
                        ? nextTransforms
                        : [],
                    backgroundColor: COLORS.black,
                    width: this.imageWrapperWidth,
                    borderColor: isSelected
                      ? COLORS.lightGrey
                      : COLORS.darkGrey,
                  },
                ]}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: currentIndex === null ? 1 : 0.3,
                  }}
                  source={{ uri: image }}
                />
                {this.renderImageOptions(index, isSelected)}
                {this.renderImageNumber(index, isSelected)}
              </Animated.View>
            </TouchableWithoutFeedback>
          )
        })}
        {this.renderAddImage()}
        {this.renderPlaceholderViews()}
      </Flex>
    )
  }

  get imageWrapperWidth() {
    return (config.deviceWidth - 64) / 3
  }

  get emptySpaces() {
    return 9 - this.state.images.length
  }

  get transforms() {
    const interpolations = {
      inputRange: [0, 1],
      outputRange: [0, this.imageWrapperWidth + 16],
    }

    const currentTransforms = [
      { translateX: this.currentValue.x.interpolate(interpolations) },
      { translateY: this.currentValue.y.interpolate(interpolations) },
    ]
    const nextTransforms = [
      { translateX: this.nextValue.x.interpolate(interpolations) },
      { translateY: this.nextValue.y.interpolate(interpolations) },
    ]

    return { currentTransforms, nextTransforms }
  }

  handleSelectImage = selectedIndex => {
    const { currentIndex, nextIndex, isAnimating, images } = this.state

    if (isAnimating) {
      return
    }

    if (currentIndex === selectedIndex) {
      this.setState({ currentIndex: null })
      return
    }

    if (currentIndex === null) {
      this.setState({ currentIndex: selectedIndex })
      return
    }

    this.setState({ nextIndex: selectedIndex, isAnimating: true })

    const currentCoordinates = {
      x: currentIndex % 3,
      y: Math.floor(currentIndex / 3),
    }
    const nextCoordinates = {
      x: selectedIndex % 3,
      y: Math.floor(selectedIndex / 3),
    }

    const nextToValueY = currentCoordinates.y - nextCoordinates.y
    const nextToValueX = currentCoordinates.x - nextCoordinates.x
    const currentToValueX = nextCoordinates.x - currentCoordinates.x
    const currentToValueY = nextCoordinates.y - currentCoordinates.y

    Animated.parallel([
      Animated.timing(this.currentValue.x, {
        toValue: currentToValueX,
        duration: 300,
        timing: Easing.elastic,
        useNativeDriver: true,
      }),
      Animated.timing(this.currentValue.y, {
        toValue: currentToValueY,
        duration: 300,
        timing: Easing.elastic,
        useNativeDriver: true,
      }),
      Animated.timing(this.nextValue.x, {
        toValue: nextToValueX,
        duration: 300,
        timing: Easing.elastic,
        useNativeDriver: true,
      }),
      Animated.timing(this.nextValue.y, {
        toValue: nextToValueY,
        duration: 300,
        timing: Easing.elastic,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newImages = images.slice()
      const selectedImage = newImages[selectedIndex]
      newImages[selectedIndex] = newImages[currentIndex]
      newImages[currentIndex] = selectedImage

      this.setState({
        images: newImages,
        currentIndex: selectedIndex,
        isAnimating: false,
        nextIndex: null,
      })

      this.currentValue.setValue({ x: 0, y: 0 })
      this.nextValue.setValue({ x: 0, y: 0 })
    })
  }

  renderImageOptions = (index, isSelected) => {
    const { currentIndex, isAnimating } = this.state

    return (
      <Flex center style={StyleSheet.absoluteFill}>
        {currentIndex !== null && <Icon color={COLORS.white} name="ios-swap" />}
        {isSelected && currentIndex === index && (
          <View
            style={{
              position: 'absolute',
              bottom: -9,
              right: -9,
            }}
          >
            <TouchableOpacity hitSlop={DELETE_HIT_SLOP}>
              <Icon
                circle
                backgroundColor={COLORS.lightGrey}
                name="ios-close"
                size={16}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      </Flex>
    )
  }

  renderImageNumber = (index, isSelected) => {
    const { currentIndex } = this.state

    return (
      <Flex
        center
        style={[
          styles.number,
          {
            backgroundColor: isSelected ? COLORS.lightGrey : COLORS.darkGrey,
          },
        ]}
      >
        <Text bold size="small">
          {index + 1}
        </Text>
      </Flex>
    )
  }

  renderPlaceholderViews = () => {
    if (this.emptySpaces <= 1) {
      return null
    }

    return range(this.emptySpaces - 1).map(index => (
      <View
        key={`gallery-edit-placeholder-view-${index}`}
        style={{ aspectRatio: 1, width: (config.deviceWidth - 64) / 3 }}
      />
    ))
  }

  renderAddImage = () => {
    if (this.emptySpaces < 1) {
      return null
    }

    return (
      <TouchableOpacity onPress={() => console.log('ADDING A NEW IMAGE')}>
        <Flex
          center
          style={[
            styles.imageWrapper,
            {
              width: (config.deviceWidth - 64) / 3,
              borderColor: COLORS.darkGrey,
            },
          ]}
        >
          <Icon name="ios-add" size={32} color={COLORS.darkGrey} />
        </Flex>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: config.deviceWidth,
    height: config.deviceWidth,
    backgroundColor: COLORS.black,
    padding: 16,
    overflow: 'hidden',
  },
  imageWrapper: {
    marginBottom: 16,
    aspectRatio: 1,
    borderWidth: 2,
    padding: 4,
    flex: 0,
  },
  number: {
    position: 'absolute',
    top: -9,
    left: -9,
    width: 16,
    height: 16,
    borderRadius: 8,
  },
})
