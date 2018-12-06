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
    size: state => state.app.size,

    token: state => state.user.token,
    userid: state => state.user.userid,

    permissionRouters: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    roles: state => state.user.roles
  }
})
export default store
