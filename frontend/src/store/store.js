import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    startMenuButton: false,
    startMenuMounted: false,
    contentPageSpacingVerticallyNotTriggered: true
  },
  getters: {
  },
  mutations: {
    switchStartMenuButton: state => {
      state.startMenuButton = !state.startMenuButton
    },
    switchContentPageSpacing: state => {
      state.contentPageSpacingVerticallyNotTriggered = !state.contentPageSpacingVerticallyNotTriggered
    },
    switchStartMenuButtonOnTrue: state => {
      state.startMenuButton = true
      $('#startmenü-icon').addClass('selected')
      // STARTMENÜ LADEN
      $('#headerbar').hide()
      $('.list-item > img').hide()
      // show
      $('#powerbutton').show()
    },
    // startMenuMountedOnTrue: state => {
    //   state.startMenuMounted = true
    // },
    // startMenuMountedOnFalse: state => {
    //   state.startMenuMounted = false
    // },
    scroll: (state, payload) => {
      console.log(payload)
      var top = document.getElementById(payload).offsetTop
      window.scrollTo(0, top)
    }
  },
  actions: {
    // scroll: (context, payload) => {
    //   console.log(payload)
    //   context.commit('scroll', payload)
    // }
  }
})
