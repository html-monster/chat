import {
  CONNECTED_NEW_USER,
  UPDATE_USERS,
  RECEIVE_NEW_MESSAGE,
} from '../constants'

import convertDateToText from '../utils/convertDateToText'

import { sendMessage } from '../services'

export const connectedNewUser = ({ userId }) => ({
  type: CONNECTED_NEW_USER,
  userId,
})

export const updateUsers = ({ users }) => ({
  type: UPDATE_USERS,
  users,
})

export const updateMessages = (message) => {
  const messageWithTime = {
    ...message,
    time: convertDateToText(new Date()),
  }

  sendMessage(messageWithTime)

  return {
    type: RECEIVE_NEW_MESSAGE,
    message: messageWithTime,
  }
}
