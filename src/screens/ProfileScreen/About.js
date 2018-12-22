import React, { Component } from 'react'
import ProfileTextSection from '../../shared/ProfileTextSection'

const About = ({ isEditMode, style, text }) => (
  <ProfileTextSection
    isEditMode={isEditMode}
    placeholderText="Write something about yourself!"
    sectionTitle="About me"
    style={style}
    text={text}
  />
)

export default About
