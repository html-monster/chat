export const sendMessage = ({ author, time, text }) => {
  window.localStorage.setItem(
    'newMessage',
    JSON.stringify({
      author,
      time,
      text,
    })
  )
}
