import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import data from './store/data.json'

sync(store, router)


const app = new Vue({
  router,
  store,
  data,
  ...App
})

export { app, router, store }
