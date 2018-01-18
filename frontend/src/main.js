// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/store'
import VueResource from 'vue-resource' // braucht man wahrscheinlich nicht
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueSocketIO, 'http://localhost:3001')
// Vue.use(VueSocketIO, 'http://localhost.com:3001')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
})
