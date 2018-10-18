import { param2Obj } from '@/utils'
import { Random } from 'mockjs'

const total = 100
const users = []
for (let i = 0; i < total; i++) {
  users.push({
    id: i + 1,
    username: Random.first(),
    realname: Random.name(),
    address: Random.county(true),
    sex: Random.boolean() ? 1 : 0,
    age: Random.integer(16, 30),
    lock: Random.boolean()
  })
}

export default {
  userList: config => {
    const { username, page, limit } = param2Obj(config.url)
    const result = username ? users.filter(row => {
      return row.username.indexOf(username) > -1 || row.realname.indexOf(username) > -1
    }) : users
    return {
      total: result.length,
      list: result.slice((page - 1) * limit, page * limit)
    }
  }
}
