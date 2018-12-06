const defaultView = {
  fullPath: '/home',
  name: 'Home',
  path: '/home',
  title: 'home'
}
const tagsView = {
  state: {
    visitedViews: [defaultView],
    cachedViews: []
  },
  mutations: {
    addVisitedView(state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
    },
    addCachedView: (state, view) => {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
    delVisitedView: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },
    delCachedView: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },

    delOthersVisitedViews: (state, view) => {
      if (view.name === defaultView.name) {
        state.visitedViews = [defaultView]
      } else {
        for (const [i, v] of state.visitedViews.entries()) {
          if (v.path === view.path) {
            state.visitedViews = [defaultView, state.visitedViews[i]]
            break
          }
        }
      }
    },
    delOthersCachedViews: (state, view) => {
      if (view.path === defaultView.path) {
        state.cachedViews = [defaultView.name]
      } else {
        state.cachedViews = [defaultView.name, view.name]
      }
    },

    delAllVisitedViews: state => {
      state.visitedViews = [defaultView]
    },
    delAllCachedViews: (state, delDefault) => {
      state.cachedViews = delDefault ? [] : [defaultView.name]
    },

    updateVisitedView: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  },
  actions: {
    addView({ commit }, view) {
      commit('addVisitedView', view)
      commit('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
      commit('addVisitedView', view)
    },
    addCachedView({ commit }, view) {
      commit('addCachedView', view)
    },
    delView({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delVisitedView', view)
        commit('delCachedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delVisitedView({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delVisitedView', view)
        resolve([...state.visitedViews])
      })
    },
    delCachedView({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delCachedView', view)
        resolve([...state.cachedViews])
      })
    },
    delOthersViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delOthersVisitedViews', view)
        commit('delOthersCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delOthersVisitedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delOthersVisitedViews', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersCachedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delOthersCachedViews', view)
        resolve([...state.cachedViews])
      })
    },

    delAllViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('delAllVisitedViews', view)
        commit('delAllCachedViews')
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delAllVisitedViews({ commit, state }) {
      return new Promise(resolve => {
        commit('delAllVisitedViews')
        resolve([...state.visitedViews])
      })
    },
    delAllCachedViews({ commit, state }, delDefault) {
      return new Promise(resolve => {
        commit('delAllCachedViews', delDefault)
        resolve([...state.cachedViews])
      })
    },

    updateVisitedView({ commit }, view) {
      commit('updateVisitedView', view)
    }
  }
}
export default tagsView
