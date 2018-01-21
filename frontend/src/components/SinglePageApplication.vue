<template>
  <div>
    <nav-bar class="hidden-md-and-down"/>
    <page-header :task="task" :getReq="getReq"/>
    <start-menu  v-show="this.$store.state.startMenuButton == true" id="startmenü" class="startmenü-display"/>
    <content-page />
  </div>
</template>

<script>
    import PageHeader from '@/components/Header.vue'
    import NavBar from './NavBar'
    // import TasksService from '@/services/TasksService'
    import StartMenu from '@/components/StartMenu'
    import ContentPage from './ContentPage'
    import AllTasksService from '../services/AllTasksService'
    export default {
      name: 'single-page-application',
      components: {
        NavBar,
        PageHeader,
        StartMenu,
        ContentPage
      },
      data () {
        return {
          task: 'Hallo',
          response: {'HALOO': 'asadsad', 'aa': 'ASa'},
          getReq: []
        }
      },
      async mounted () {
        console.log(this.$store.state.task)
        // console.log(this.data().responses)
        this.$store.dispatch('storeInitFromServer')
        console.log(this.$store.state.task)
      },
      computed: {
        startMenuActive () {
          return this.$store.state.startMenuButton
        }
      },
      beforeCreate: async function () {
        console.log('Get Request Alltasks')
        this.getReq = (await AllTasksService.init()).data
        this.$store.commit('setAufgabenanzahl', this.getReq.length)
        console.log('Die insgesamte Aufgaben sind' + this.getReq.length + '< Übergeben | im Store >' + this.$store.state.aufgabenanzahl)// },
        // created: function () {
        //   console.log('this.getReq')
        //   console.log(this.getReq)
        // },
        // beforeDestroy: function () {
        //   console.log('startMenuDestroy')
        //   this.$store.commit('startMenuMountedOnFalse')
      },
      created: function () {
        // this.$store.commit('switchStartMenuButton')
        console.log('ICH BIN JETZT GEMOUNTED')
        // $('.list-item > img').show()
        // // hide
        // // $('#startmenü-display').hide()
        // $('#powerbutton').hide()
      }
    }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: var(--breiteNavbar-);
  }
  #startmenü{
    position: absolute;
    left: var(--breiteNavbar-);
    width: 100%;
    color:white;
    background: rgba(33, 33, 33, 0.6) !important;
    width:calc(100% - var(--breiteNavbar-)) !important;
    z-index: 1;
  }
  .danger-alert {
    color: red;
  }
</style>
