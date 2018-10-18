import request from '@/utils/request'
/**
 * 用户列表
 * @param {Object} query 过滤条件
 */
function userList(query) {
  return request({
    url: 'user/list',
    method: 'get',
    params: query
  })
}

export {
  userList
}
