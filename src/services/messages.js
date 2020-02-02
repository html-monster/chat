export const sendMessage = ({ author, time, timestamp, text }) => {
  window.localStorage.setItem(
    'newMessage',
    JSON.stringify({
      author,
      time,
      timestamp,
      text,
    })
  )
}
export const fetchMessage = () => {
  try {
    return JSON.parse(window.localStorage.getItem('newMessage'))
  } catch (e) {
    console.error('Chat: Error to fetch message', e)
    return []
  }
}
