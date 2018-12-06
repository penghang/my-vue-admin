import lf from 'localforage'

const keys = {
  app: 'app',
  theme: 'theme'
}
let store = lf.createInstance({ name: 'default' })
/**
 * 设置存储空间名称
 * @param {string} name - 存储空间名称
 */
function createDb(name) {
  store = lf.createInstance({ name })
}
function setApp(app) {
  return store.setItem(keys.app, app)
}
function getApp() {
  return store.getItem(keys.app)
}
function setTheme(theme) {
  return store.setItem(keys.theme, theme)
}
function getTheme(theme) {
  return store.getItem(keys.theme)
}
export {
  createDb,
  setApp,
  getApp,
  setTheme,
  getTheme
}
