import { login } from '@/api/login'
import { setName, setToken } from '@/utils/lfStore'

const user = {
  state: {
    username: '',
    token: ''
  },
  mutations: {
    setUser: (state, { username, token }) => {
      state.token = token
      state.username = username
    },
    setToken: (state, token) => {
      state.token = token
    },
    logout: (state) => {
      state.token = ''
      state.username = ''
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      const name = username.trim()
      return new Promise((resolve, reject) => {
        setName(name)
        login(name, password).then(response => {
          const data = response.data
          commit('setToken', data.token)
          setToken(data.token)
          resolve({ username, password })
        }).catch(error => {
          reject(error)
        })
      })
    },
    loginOut({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        resolve()
      })
    }
  }
}
export default user
