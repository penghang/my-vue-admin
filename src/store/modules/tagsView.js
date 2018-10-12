const tagsView = {
  state: {
    visitedViews: [],
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
        commit('delAllCachedViews', view)
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
    delAllCachedViews({ commit, state }) {
      return new Promise(resolve => {
        commit('delAllCachedViews')
        resolve([...state.cachedViews])
      })
    },

    updateVisitedView({ commit }, view) {
      commit('updateVisitedView', view)
    }
  }
}
export default tagsView
