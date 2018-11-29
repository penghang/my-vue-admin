import { success, error } from '@/mock/utils/result-util'
import { getToken } from '@/utils/auth'

const routes = {
  admin: [
    {
      name: 'System',
      children: [{
        name: 'User'
      }, {
        name: 'Role'
      }, {
        name: 'pagePermission'
      }]
    }
  ],
  role1: [
    {
      name: 'ErrorPages',
      children: [{
        name: 'Page401'
      }, {
        name: 'Page404'
      }]
    }
  ]
}

const userMap = [
  {
    userid: 1,
    username: 'admin',
    token: 'header.payload-admin.sec',
    name: '管理员',
    roles: ['admin']
  },
  {
    userid: 2,
    username: 'user1',
    token: 'header.payload-user1.sec',
    name: '用户1',
    roles: ['role1']
  }
]
export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    const user = userMap.filter(u => {
      return u.username === username
    })[0]
    if (user) {
      return success(user)
    } else {
      return error('1000', '用户名或密码错误')
    }
  },
  getUserInfo: () => {
    const token = getToken()
    const user = userMap.filter(u => {
      return u.token === token
    })[0]
    return success(user)
  },
  logout: () => success(),
  getRoutes: () => {
    const token = getToken()
    const user = userMap.filter(u => {
      return u.token === token
    })[0]
    return success(routes[user.roles[0]])
  }
}
