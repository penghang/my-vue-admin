import request from '@/utils/request'
function getSettingInfo() {
  return request({
    url: 'user/getSettingInfo',
    method: 'get'
  })
}

export {
  getSettingInfo
}
