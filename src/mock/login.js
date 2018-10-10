import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    token: 'admin'
  },
  role1: {
    token: 'role1'
  }
}

export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
