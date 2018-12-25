import React from 'react'
import { MODALS } from './constants'

const ModalRouter = ({ modal, closeModal }) => {
  const ModalComponent = MODALS[modal.name]

  if (!ModalComponent) {
    return null
  }

  return <ModalComponent params={modal.params} closeModal={closeModal} />
}

export default ModalRouter
