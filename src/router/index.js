import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

const routerMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/home',
    name: 'home',
    component: Layout// ,
    // children: [
    //   {
    //     path: '/home',
    //     component: () => import('@/view/dashboard/index'),
    //     name: 'Dashboard',
    //     meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    //   }
    // ]
  },
  { path: '*', redirect: '/login' }
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
