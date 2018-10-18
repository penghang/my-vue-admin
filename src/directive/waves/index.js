import waves from './waves'

const install = function(Vue) {
  Vue.directive('waves', waves)
}

waves.install = install
export default waves
