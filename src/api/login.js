import request from '@/utils/request'

function login(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'login/login',
    method: 'post',
    data
  })
}
function logout() {
  return request({
    url: 'login/logout',
    method: 'post'
  })
}
function getUserInfo() {
  return request({
    url: 'user/info',
    method: 'get'
  })
}
function getRoutes() {
  return request({
    url: 'user/routes',
    method: 'get'
  })
}
export { login, logout, getUserInfo, getRoutes }
