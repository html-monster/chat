import { RECEIVE_NEW_MESSAGE } from '../constants'

import convertDateToText from '../utils/convertDateToText'

import { sendMessage, fetchMessage } from '../services'

export const updateMessages = (message) => ({
  type: RECEIVE_NEW_MESSAGE,
  message,
})

export const setMessage = (message) => {
  const currentDate = new Date()
  const messageWithTime = {
    ...message,
    time: convertDateToText(currentDate),
    timestamp: currentDate.valueOf(),
  }

  sendMessage(messageWithTime)

  return updateMessages(messageWithTime)
}

export const getMessage = () => {
  const message = fetchMessage()

  return updateMessages(message)
}
