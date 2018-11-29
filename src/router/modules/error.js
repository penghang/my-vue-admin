import Layout from '@/views/layout'

export const errorRoute = {
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: 'errorPages',
    icon: 'el-icon-menu'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/errorPage/401'),
      name: 'Page401',
      meta: { title: 'page401', icon: 'el-icon-warning' }
    },
    {
      path: '404',
      component: () => import('@/views/errorPage/404'),
      name: 'Page404',
      meta: { title: 'page404', icon: 'el-icon-warning' }
    }
  ]
}
