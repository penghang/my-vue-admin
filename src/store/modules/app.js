import { setApp } from '@/utils/lfStore'
const defaults = {
  animation: true,
  sidebarCollapse: false,
  language: 'zh',
  size: 'medium'
}
const app = {
  state: {
    ...defaults
  },
  mutations: {
    toggleSideBar(state) {
      var collapse = !state.sidebarCollapse
      state.sidebarCollapse = collapse
      defaults.sidebarCollapse = collapse
      setApp(defaults)
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
