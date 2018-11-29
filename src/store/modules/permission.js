import { constantRouterMap, routerMap, wildcard } from '@/router'
import { getRoutes } from '@/api/login'

function filterAsyncRoute(routeNames, routes) {
  const asyncRoutes = []
  routeNames.forEach(r => {
    const sourceRoute = routes.filter(sr => {
      return sr.name === r.name
    })[0]
    if (sourceRoute) {
      const targetRoute = Object.assign({}, sourceRoute)
      if (r.children) {
        targetRoute.children = filterAsyncRoute(r.children, sourceRoute.children)
      }
      asyncRoutes.push(targetRoute)
    }
  })
  return asyncRoutes
}
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    setRoutes: (state, routes) => {
      state.addRouters = routes
      state.routers = constantRouterMap.concat(routes)
    }
  },
  actions: {
    generateRoutes({ commit }, data) {
      return new Promise(resolve => {
        getRoutes().then(res => {
          commit('setRoutes', filterAsyncRoute(res.data, routerMap).concat(wildcard))
          resolve()
        })
      })
    }
  }
}

export default permission
