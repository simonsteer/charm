import React from 'react'
import { ALERTS } from './constants'

const AlertRouter = ({ alert, closeAlert }) => {
  const AlertComponent = ALERTS[alert.name]

  if (!AlertComponent) {
    return null
  }

  return <AlertComponent params={alert.params} closeAlert={closeAlert} />
}

export default AlertRouter
