// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      data,
      config,
      [config.storageTokenKeyName]: data.token
      // [config.storageRefreshTokenKeyName]: data[config.storageRefreshTokenKeyName]
    })

    // ** Add to user, accessToken & refreshToken to localStorage
    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.setItem(
      config.storageTokenKeyName,
      JSON.stringify(data.accessToken)
    )
    localStorage.setItem(
      config.storageRefreshTokenKeyName,
      JSON.stringify(data.refreshToken)
    )
  }
}

export const handleProfile = (data) => (dispatch) => {
  console.log(data)
  dispatch({
    type: 'PROFILE',
    data
  })
}

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      [config.storageTokenKeyName]: null,
      [config.storageRefreshTokenKeyName]: null
    })

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem('userData')
    localStorage.removeItem(config.storageTokenKeyName)
    localStorage.removeItem(config.storageRefreshTokenKeyName)
  }
}
