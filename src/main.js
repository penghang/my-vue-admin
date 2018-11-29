import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import i18n from './lang'
import './permission'
import './icons'

// 本地开发环境则使用mock数据
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
