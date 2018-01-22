// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/store'
import VueSocketIO from 'vue-socket.io'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
let config = {
  apiKey: "AIzaSyBipP7RXPlv6u0xKZD5hz9BaGlz7UhSNjg",
  authDomain: "lintu-58e84.firebaseapp.com",
  databaseURL: "https://lintu-58e84.firebaseio.com",
  projectId: "lintu-58e84",
  storageBucket: "lintu-58e84.appspot.com",
  messagingSenderId: "767934260199"
};

Vue.use(Vuetify)
Vue.use(VueSocketIO, 'http://localhost:3001')

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: {App},
      store: store
    })
  }
})
