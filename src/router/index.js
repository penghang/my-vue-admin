import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

const routerMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: { title: 'login' },
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: 'home', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: 'noredirect',
    name: 'SystemPages',
    meta: {
      title: 'system',
      icon: '404'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user'),
        name: 'user',
        meta: { title: 'user' }
      },
      {
        path: 'role',
        component: () => import('@/views/errorPage/404'),
        name: 'role',
        meta: { title: 'role' }
      },
      {
        path: 'permission',
        component: () => import('@/views/errorPage/404'),
        name: 'pagePermission',
        meta: { title: 'pagePermission' }
      }
    ]
  },
  {
    path: '/system1',
    component: Layout,
    redirect: 'noredirect',
    name: 'SystemPages',
    meta: {
      title: 'system',
      icon: '404'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/errorPage/401'),
        name: 'user',
        meta: { title: 'user' }
      },
      {
        path: 'role',
        component: () => import('@/views/errorPage/404'),
        name: 'role',
        meta: { title: 'role' }
      },
      {
        path: 'permission',
        component: () => import('@/views/errorPage/404'),
        name: 'pagePermission',
        meta: { title: 'pagePermission' }
      }
    ]
  },
  {
    path: '/system2',
    component: Layout,
    redirect: 'noredirect',
    name: 'SystemPages',
    meta: {
      title: 'system',
      icon: '404'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/errorPage/401'),
        name: 'user',
        meta: { title: 'user' }
      },
      {
        path: 'role',
        component: () => import('@/views/errorPage/404'),
        name: 'role',
        meta: { title: 'role' }
      },
      {
        path: 'permission',
        component: () => import('@/views/errorPage/404'),
        name: 'pagePermission',
        meta: { title: 'pagePermission' }
      }
    ]
  },
  {
    path: '/system3',
    component: Layout,
    redirect: 'noredirect',
    name: 'SystemPages',
    meta: {
      title: 'system',
      icon: '404'
    },
    children: [
      {
        path: 'user1',
        component: () => import('@/views/errorPage/401'),
        name: 'user',
        meta: { title: 'user' }
      },
      {
        path: 'role1',
        component: () => import('@/views/errorPage/404'),
        name: 'role',
        meta: { title: 'role' }
      },
      {
        path: 'permission1',
        component: () => import('@/views/errorPage/404'),
        name: 'pagePermission',
        meta: { title: 'pagePermission' }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'page401',
        meta: { title: 'page401' }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'page404',
        meta: { title: 'page404' }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
export { routerMap }
