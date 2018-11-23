import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import theme from './modules/theme'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    tagsView,
    theme
  },
  getters: {
    sidebarCollapse: state => state.app.sidebarCollapse,
    language: state => state.app.language,
    token: state => state.user.token,
    permissionRouters: state => state.permission.routers,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews
  }
})

export default store
