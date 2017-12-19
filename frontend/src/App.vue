<template>
  <div id="app">
    <v-app>



      <main>
        <nav-bar/>  <!--:jumpstartmenu="jumpstartMenu()"  -->
        <page-header :task="task"/>
        <aufgaben :task="task"/>

        <start-menu  v-show="this.$store.state.startMenuButton == true" id="startmenü" />

          <!--<span>{{ startMenuActive }}</span>-->

          <router-view></router-view>

      </main>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'
  import NavBar from './components/NavBar'
  import Aufgaben from './components/Aufgaben'
  import TasksService from '@/services/TasksService'
  import StartMenu from '@/components/StartMenu'
  export default {
    name: 'app',
    components: {
      Aufgaben,
      NavBar,
      PageHeader,
      StartMenu
    },
    data () {
      return {
        task: 'Hallo'
      }
    },
    async mounted () {
      this.task = (await TasksService.index()).data
    },
    computed: {
      startMenuActive () {
        return this.$store.state.startMenuButton
      // },
      // jumpstartMenu: function (h) {
      //   this.$nextTick(function () {
      //     this.$store.commit('switchStartMenuButtonOnTrue')
      //   })
      //   this.$nextTick(function () {
      //     this.selectedStartMenuIconOnlyOn()
      //     var top = document.getElementById(h).offsetTop // Getting Y of target element
      //     console.log(top)
      //     console.log('Hallo_')
      //     console.log(h)
      //     window.scrollTo(0, top)
      //   })                       // Go there directly or some transition
    //   },
    // selectedStartMenuIconOnlyOn: function () {
    //   $('#startmenü-icon').addClass('selected')
    //   // STARTMENÜ LADEN
    //   $('#headerbar').hide()
    //   $('.list-item > img').hide()
    //   // show
    //   $('#powerbutton').show()
    // },
    //   jumpHandler (parent, id) {
    //     console.log(parent)
    //     this.$store.commit('switchStartMenuButtonOnTrue')
    //     var top = document.getElementById(id[0]).offsetTop // Getting Y of target element
    //     console.log(top)
    //     console.log('Hallo_')
    //     console.log(id[0])
    //     window.scrollTo(0, top)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #startmenü{
    position: absolute;
    left: var(--breiteNavbar-);
    height: 100%;
    color:white;
    background: rgba(33, 33, 33, 0.6) !important;
    width:calc(100% - var(--breiteNavbar-)) !important;
    z-index: 1;
  }
  .danger-alert {
    color: red;
  }
</style>
