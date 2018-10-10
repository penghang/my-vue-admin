import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  { path: '*', redirect: '/login' }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
