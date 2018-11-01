import request from '@/utils/request'
/**
 * 角色列表
 * @param {Object} query 过滤条件
 */
function roleList(query) {
  return request({
    url: 'role/list',
    method: 'get',
    params: query
  })
}

export {
  roleList
}
