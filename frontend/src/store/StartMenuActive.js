import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.StartMenuActive({
  state: {
    startMenuButton: false
  },
  mutations: {
    switchStartMenuButton: state => !state.startMenuActive
  }
})
