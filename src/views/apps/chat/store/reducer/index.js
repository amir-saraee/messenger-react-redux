const initialState = {
  chats: [],
  contacts: [],
  userProfile: {},
  selectedUser: {},
  groups: [],
  groupData: {}
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return { ...state, userProfile: action.userProfile }
    case 'GET_CHAT_CONTACTS':
      return { ...state, groups: action.data }
    case 'SELECT_CHAT':
      return { ...state, groupData: action.data }
    case 'SEND_MSG':
      // ** Add new msg to chat
      const newMsg = action.data.response.chat
      return { ...state, selectedUser: { ...state.selectedUser, chat: newMsg } }
    default:
      return state
  }
}

export default chatReducer
