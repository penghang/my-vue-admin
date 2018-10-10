import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { removeToken } from './auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10 * 1000
})
// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['JWT-Token'] = store.getters.token
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
  response => response,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          removeToken()
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
