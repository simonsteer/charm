import React, { Component } from 'react'
import GalleryView from './GalleryView'
import GalleryEdit from './GalleryEdit'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.viewabilityConfig = {
      itemVisiblePercentThreshold: 50,
    }
  }

  render() {
    const {
      props: { images, isEditMode },
      state: { currentIndex },
    } = this

    return isEditMode ? (
      <GalleryEdit images={images} />
    ) : (
      <GalleryView images={images} />
    )
  }
}
