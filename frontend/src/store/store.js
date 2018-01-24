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
    task: [{aufgabennummer: '1.0', aufgabentitel: 'BeispielAufgabe', aufgabe: 'Aufgabe', solution: 'loesung'}],
    aufgabenanzahl: 4,
    currentTaskID: 1
  },
  mutations: {
    setAufgabenanzahl: (state, anzahl) => {
      state.aufgabenanzahl = anzahl
    },
    setcurrentTaskID: (state, id) => {
      state.aufgabenanzahl = id
    },
    switchStartMenuButton: state => {
      if ($('.startmenü-icon').hasClass('selected')) {
        $('.startmenü-icon').removeClass('selected')
        // STARTMENÜ entfernen
        $('.list-item > img').show()
        // hide
        // $('#startmenü-display').hide()
        $('#powerbutton').hide()
        console.log('if')
      } else {
        $('.startmenü-icon').addClass('selected')
        // STARTMENÜ LADEN
        $('#headerbar').hide()
        $('.list-item > img').hide()
        // $('#startmenü-display').show()
        $('#powerbutton').show()
        console.log('Else')
      }
      state.startMenuButton = !state.startMenuButton
    },
    switchContentPageSpacing: state => {
      if ($('#arrowcrosslist').hasClass('selected')) {
        $('#arrowcrosslist').removeClass('selected')
        $('#arrowcrosslist img').css('filter', 'invert(35%)')
        $('#arrowcrosslist').css('background-color', 'black')
        $('#arrowcrosslist').css('border-right', 'none')
      } else {
        $('#arrowcrosslist').addClass('selected')
        $('#arrowcrosslist').css('background-color', 'grey')
        $('#arrowcrosslist img').css('filter', 'invert(0%)')
        $('#arrowcrosslist').css('border-right', '3px solid black')
      }
      console.log('switch')
      state.contentPageSpacingVerticallyNotTriggered = !state.contentPageSpacingVerticallyNotTriggered
    },
    switchStartMenuButtonOnTrue: state => {
      state.startMenuButton = true
      $('.startmenü-icon').addClass('selected')
      console.log('HALLO SELECTED?')
      // STARTMENÜ LADEN
      $('.list-item > img').hide()
      // show
      $('#powerbutton').show()
    },
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
