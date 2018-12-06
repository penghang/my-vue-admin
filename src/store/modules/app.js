import { createDb, setApp, getApp } from '@/utils/lfStore'

const defaults = {
  animation: true,
  sidebarCollapse: false,
  language: 'zh',
  size: 'medium'
}
const app = {
  namespaced: true,
  state: {
    ...defaults
  },
  mutations: {
    toggleSideBar(state) {
      var collapse = !state.sidebarCollapse
      state.sidebarCollapse = collapse
      defaults.sidebarCollapse = collapse
    },
    setSideBar(state, collapse) {
      state.sidebarCollapse = collapse
      defaults.sidebarCollapse = collapse
    },
    setLanguage(state, language) {
      state.language = language
      defaults.language = language
    },
    setSize(state, size) {
      state.size = size
      defaults.size = size
    }
  },
  actions: {
    load({ commit, dispatch, rootGetters }) {
      createDb(rootGetters.userid)
      return new Promise(async resolve => {
        const app = await getApp()
        if (app) {
          const { sidebarCollapse, language, size } = app
          commit('setSideBar', sidebarCollapse)
          commit('setLanguage', language)
          commit('setSize', size)
        }
        await dispatch('theme/load', null, { root: true })
        resolve()
      })
    },
    toggleSideBar({ commit, state }) {
      commit('toggleSideBar')
      return setApp(defaults)
    },
    setSideBar({ commit }, sidebarCollapse) {
      commit('setSideBar', sidebarCollapse)
      return setApp(defaults)
    },
    setLanguage({ commit }, language) {
      commit('setLanguage', language)
      return setApp(defaults)
    },
    setSize({ commit }, size) {
      commit('setSize', size)
      return setApp(defaults)
    }
  }
}
export default app
