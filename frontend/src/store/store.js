import Vue from 'vue'
import Vuex from 'vuex'
import TasksService from '@/services/TasksService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    startMenuButton: false,
    startMenuMounted: false,
    contentPageSpacingVerticallyNotTriggered: true,
    task: [{aufgabennummer: '1.0', aufgabentitel: 'BeispielHallo', aufgabe: 'BALALALALALALALALALALALALA'}],
    aufgabenanzahl: 4,
    currentTaskID: 1
  // },
  // getters: {
  //     // getTask: async function (id) {
  //     //   console.log(this.state.task)
  //     //   this.state.task = (await TasksService.index(id)).data
  //   }

  },
  // getters: {
  //   getTaskLength () {
  //     return this.$store.state.todos.filter(todo => todo.done).length
  //   }
  // },
  mutations: {
    setAufgabenanzahl: (state, anzahl) => {
      state.aufgabenanzahl = anzahl
    },
    setcurrentTaskID: (state, id) => {
      state.aufgabenanzahl = id
    },
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
    },
    storeNewTaskFromServer: (state, response) => {
      state.task = response
      console.log(response)
    }
  },
  actions: {
    // scroll: (context, payload) => {
    //   console.log(payload)
    //   context.commit('scroll', payload)
    // }
    storeNewTaskFromServer: async(state, id) => {
      console.log('Dies ist die Id von Server Request' + id)
      state.commit('setcurrentTaskID', id)
      state.commit('storeNewTaskFromServer', (await TasksService.index(id)).data)
    },
    storeInitFromServer: async(state) => {
      state.commit('storeNewTaskFromServer', (await TasksService.init()).data)
    }
  }
})
