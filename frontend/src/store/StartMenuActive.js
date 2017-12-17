import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const startMenuState = new Vuex.Store({
  state: {
    startMenuButton: false
  },
  mutations: {
    switchStartMenuButton: state => {
      state.startMenuActive = !state.startMenuActive
    },
    switchStartMenuButtonOnTrue: state => {
      state.startMenuActive = true
    }
  }
})
