import React, { Component } from 'react'
import ProfileTextSection from '../../shared/ProfileTextSection'

const MessageMeIf = ({
  isEditMode,
  style,
  text,
  onFocusTextInput,
  onBlurTextInput,
}) => (
  <ProfileTextSection
    onFocusTextInput={onFocusTextInput}
    onBlurTextInput={onBlurTextInput}
    isEditMode={isEditMode}
    placeholderText="Why should someone message you? What are you looking for on Charm?"
    sectionTitle="Message me if..."
    sectionIconName="ios-text"
    style={style}
    text={text}
  />
)

export default MessageMeIf
