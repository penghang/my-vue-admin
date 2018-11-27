import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
// cookie
import Cookies from 'js-cookie'
// 顶部进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)
// 登录路由
const loginRoute = [{
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index'),
  // component:Login,
  meta: { title: 'login' },
  hidden: true
}]

// 找回密码路由
const losepwdRoute = [{
  path: '/losepwd',
  name: 'Losepwd',
  hidden: true,
  component: () => import('@/views/losepwd/index'),
  meta: { title: 'losepwd' },
  children: [{
    path: 'find',
    name: 'Find',
    component: () => import('@/views/losepwd/find/index')

  }]
}]

// 首页路由
const homeRoute = [{
  path: '/',
  component: Layout,
  hidden: true,
  redirect: 'home',
  children: [
    {
      path: '/home',
      icon: 'el-icon-location',
      component: () => import('@/views/home/index'),
      name: 'Home',
      meta: { title: 'home', icon: 'dashboard' }
    }
  ]
}]

// 重定向路由
const redirectRoute = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [
    {
      path: '/redirect/:path*',
      component: () => import('@/views/redirect/index')
    }
  ]
}]
// 错误页面路由
const errorRoute = [
  {
    path: '/error',
    icon: 'el-icon-menu',
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

// 页面导航路由
const otherRoute = [
  {
    path: '/system',
    icon: 'el-icon-menu',
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
      },
      {
        path: 'setting',
        component: () => import('@/views/system/setting'),
        name: 'pageSetting',
        meta: { title: 'pageSetting' }
      }
    ]
  }
]

const routerMap = [
  ...loginRoute,
  ...redirectRoute,
  ...otherRoute,
  ...losepwdRoute,
  ...homeRoute,
  ...errorRoute
]

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.fullPath === '/losepwd/find') {
    next()
    return
  }
  // 用户点击到返回的时候清除cookies 防止点击返回再次进入到home
  if (to.fullPath === '/login') {
    Cookies.remove('username')
  }
  if (to.fullPath !== '/login' && !Cookies.get('username')) {
    next('/login')
    return
  }

  if (to.matched.length === 0) {
    router.back()
  } else {
    NProgress.start()
    next()
  }
})
router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
export { routerMap }
