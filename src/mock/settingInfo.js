import Mock, { Random } from 'mockjs'
const o = Mock.mock({
  'tel': /[1][34578][0-9]{9}/
})
const strength = Mock.mock({
  'strength|+1': [
    '强',
    '中',
    '弱'
  ]
})
const dataList = [{
  success: true,
  tel: o.tel,
  mail: Random.email(),
  strength: strength.strength,
  nickname: Random.ctitle(),
  synopsis: Mock.mock('@csentence')
}]
export default {
  getSettingInfo: config => {
    return dataList[0]
  }
}
