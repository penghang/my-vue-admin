import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from './auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10 * 1000
})
// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['JWT-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  // response => response,
  response => {
    const { code, msg } = response.data
    console.log(code, msg)
    if (code !== 0) {
      Message({
        message: msg,
        type: 'error',
        duration: 5 * 1000
      })
      // 业务错误码处理
      // 5000:非法的token; 5001:Token 过期了;
      if (code === 5000 || code === 5001) {
        // MessageBox.confirm('登录失效', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     location.reload()
        //   })
        // })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    if (error.response) {
      // http错误码处理
      switch (error.response.status) {
        case 401:
          // removeToken()
          break
        case 404:
          break
        case 500:
          break
        default:
          break
      }
    }
    console.log(`err${error}`)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
