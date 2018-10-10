import lf from 'localforage'

const keys = {
  user: 'user',
  app: 'app'
}
let ns = 'default'
let store = lf.createInstance({ name: ns })
// const defaultStore = store

function setUser({ username }) {
  ns = username
  store = lf.createInstance({ name: ns })
}
function setApp(app) {
  return store.setItem(keys.app, app)
}
function getApp() {
  return store.getItem(keys.app)
}
export {
  setUser,
  setApp,
  getApp
}
