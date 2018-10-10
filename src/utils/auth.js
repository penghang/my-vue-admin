import Cookies from 'js-cookie'

const TokenKey = 'JWT-Token'

function getToken() {
  return Cookies.get(TokenKey)
}

function setToken(token) {
  return Cookies.set(TokenKey, token)
}

function removeToken() {
  return Cookies.remove(TokenKey)
}
export {
  getToken,
  setToken,
  removeToken
}
