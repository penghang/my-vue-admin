import Mock from 'mockjs'
import loginApi from './login'
import userApi from './user'

Mock.setup({
  timeout: 500
})

// 登录相关
Mock.mock(/login\/login/, 'post', loginApi.login)
Mock.mock(/login\/logout/, 'post', loginApi.logout)
Mock.mock(/user\/info/, 'get', loginApi.getUserInfo)

// 用户管理
Mock.mock(/user\/list/, 'get', userApi.userList)

export default Mock
