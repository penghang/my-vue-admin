import { setApp } from '@/utils/lfStore'
const defaults = {
  sidebar: {
    opened: true,
    withoutAnimation: false
  },
  language: 'zh',
  size: 'medium'
}
const app = {
  state: {
    ...defaults
  },
  mutations: {
    toggleSideBar(state) {

    },
    closeSideBar(state) {
    },
    setLanguage(state, language) {
      state.language = language
      defaults.language = language
      setApp(defaults)
    },
    setSize(state, size) {
      state.size = size
    },
    setApp(state, app) {
      const { sidebar, language, size } = app
      state.sidebar = sidebar
      state.language = language
      state.size = size
    }
  }
}
export default app
