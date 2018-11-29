import Layout from '@/views/layout'

export const constantRouterMap = [
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
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: 'login' },
    hidden: true
  },
  {
    path: '/losepwd',
    name: 'Losepwd',
    hidden: true,
    component: () => import('@/views/losepwd/index'),
    meta: { title: 'losepwd' },
    children: [
      {
        path: '/',
        component: () => import('@/views/losepwd/find/index')
      }
    ]
  },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@/views/login/authredirect'),
  //   hidden: true
  // },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: 'home', icon: 'el-icon-more' }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'setting',
        component: () => import('@/views/account/setting'),
        name: 'accountSetting',
        meta: {
          title: 'accountSetting', icon: 'el-icon-setting' }
      }
    ]
  }
]
