import axios from 'axios'

// ** Get User Profile
export const getUserProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/apps/chat/users/profile-user')

    return dispatch({
      type: 'GET_USER_PROFILE',
      userProfile: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

// ** Get Chats & Contacts
export const getChatContacts = () => async (dispatch) => {
  try {
    await axios.get('http://130.185.75.133:8080/get_my_groups').then((res) => {
      dispatch({
        type: 'GET_CHAT_CONTACTS',
        data: res.data
      })
    })
  } catch (err) {
    console.log(err)
  }
}

// ** Select Chat
export const selectChat = (id) => async (dispatch) => {
  try {
    await axios
      .get(`http://130.185.75.133:8080/get_group_info?id=${id}`, { id })
      .then((res) => {
        console.log(res)
        dispatch({ type: 'SELECT_CHAT', data: res.data })
        dispatch(getChatContacts())
      })
  } catch (err) {
    console.log(err)
  }
}

// ** Send Msg
export const sendMsg = (obj) => async (dispatch) => {
  try {
    await axios.post('/apps/chat/send-msg', { obj }).then((res) => {
      dispatch({ type: 'SEND_MSG', data: res.data })
      dispatch(selectChat(obj.contact.id))
    })
  } catch (err) {
    console.log(err)
  }
}
