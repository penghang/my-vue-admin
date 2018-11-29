import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import { constantRouterMap } from './modules/constant'

import { errorRoute } from './modules/error'

Vue.use(Router)

// 页面导航路由
const pageRoutes = [
  {
    path: '/system',
    component: Layout,
    redirect: 'noredirect',
    name: 'System',
    meta: {
      title: 'system',
      icon: 'el-icon-menu'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user'),
        name: 'User',
        meta: { title: 'user' }
      },
      {
        path: 'role',
        component: () => import('@/views/system/role'),
        name: 'Role',
        meta: { title: 'role' }
      },
      {
        path: 'permission',
        component: () => import('@/views/errorPage/404'),
        name: 'pagePermission',
        meta: { title: 'pagePermission' }
      }
    ]
  }
]

const routerMap = [
  errorRoute,
  ...pageRoutes
]

/**
 * 通配路由
 */
const wildcard = [
  { path: '*', redirect: '/404', hidden: true }
]

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export default router
export { constantRouterMap, routerMap, wildcard }
