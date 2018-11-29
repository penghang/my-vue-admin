import Mock from 'mockjs'
import loginApi from './modules/login'
import userApi from './modules/user'
import roleApi from './modules/role'
import settingApi from './modules/settingInfo'
Mock.setup({
  timeout: 100
})

// 登录相关
Mock.mock(/login\/login/, 'post', loginApi.login)
Mock.mock(/login\/logout/, 'post', loginApi.logout)
Mock.mock(/user\/info/, 'get', loginApi.getUserInfo)
Mock.mock(/user\/routes/, 'get', loginApi.getRoutes)

// 用户管理
Mock.mock(/user\/list/, 'get', userApi.userList)
// 角色管理
Mock.mock(/role\/list/, 'get', roleApi.roleList)
// 设置相关
Mock.mock(/user\/getSettingInfo/, 'get', settingApi.getSettingInfo)

export default Mock
