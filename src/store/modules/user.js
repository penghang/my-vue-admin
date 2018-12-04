import { login, getUserInfo, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    userid: '',
    username: '',
    name: '',
    roles: []
  },
  mutations: {
    setUserName: (state, username) => {
      state.username = username
    },
    setToken: (state, token) => {
      state.token = token
    },
    setInfo: (state, { userid, username, name, roles }) => {
      state.userid = userid
      state.username = username
      state.name = name
      state.roles = roles
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      const name = username.trim()
      return new Promise((resolve, reject) => {
        login(name, password).then(({ data }) => {
          commit('setToken', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(({ data }) => {
          if (!data) {
            reject('error')
          }
          commit('setInfo', data)
          resolve(data)
        }).catch(() => {
          reject('error')
        })
      })
    },
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setToken', '')
          commit('logout')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    fedLogout({ commit }) {
      return new Promise(resolve => {
        commit('setToken', '')
        removeToken()
        resolve()
      })
    }
  }
}
export default user
