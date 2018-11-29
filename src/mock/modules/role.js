import { param2Obj } from '@/utils'
import { Random } from 'mockjs'
import { success } from '@/mock/utils/result-util'

const total = 100
const roles = []
for (let i = 0; i < total; i++) {
  roles.push({
    id: i + 1,
    rolename: Random.word(),
    status: Random.integer(0, 1)
  })
}

export default {
  roleList: config => {
    const { rolename, page, limit } = param2Obj(config.url)
    const result = rolename ? roles.filter(row => {
      return row.rolename.indexOf(rolename) > -1
    }) : roles
    return success({
      total: result.length,
      list: result.slice((page - 1) * limit, page * limit)
    })
  }
}
