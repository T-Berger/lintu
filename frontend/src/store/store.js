import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    startMenuButton: false
  },
  getters: {
  },
  mutations: {
    switchStartMenuButton: state => {
      state.startMenuButton = !state.startMenuButton
    }
  },
  actions: {
  }
})
