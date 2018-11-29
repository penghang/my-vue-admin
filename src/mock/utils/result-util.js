/**
 * 返回一个成功对象
 * @param {Object} data - 业务数据
 */
export function success(data) {
  return {
    code: 0,
    msg: '成功',
    data
  }
}
/**
 * 返回一个失败对象
 * @param {Number} code - 状态码
 * @param {String} msg - 描述信息
 */
export function error(code, msg) {
  return {
    code,
    msg
  }
}
