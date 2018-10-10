import Mock from 'mockjs'
import loginApi from './login'

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginApi.login)
Mock.mock(/\/login\/logout/, 'post', loginApi.logout)
Mock.mock(/\/user\/info/, 'get', loginApi.getUserInfo)

export default Mock
