export default () => ({
  usersList: {
    flex: 1,
    overflow: 'auto',
    background: '#444753',
  },
  user: {
    display: 'flex',
    padding: 15,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  userName: {
    color: 'white',
  },
  userStatus: {
    color: '#919191',
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 8,
      height: 8,
      margin: '1px 5px 1px 0',
      borderRadius: '50%',
      background: '#44b700',
    },
  },
})
