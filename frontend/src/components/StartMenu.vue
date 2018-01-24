<template>
  <v-layout>
    <v-flex class="startmenü-display">
      <br id="top">
      <task-loader class="startmenü-display" :getReq="getReq"/>
      <br>
        <!--Just for Styling-->
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

      <!--<list-setting  class="startmenü-display"/>-->
      <profil id="profil"/>
      <v-btn v-on:click="scrollTop()">Scroll up</v-btn>
      <div id="voidScroll"></div>
    </v-flex>

  </v-layout>
</template>

<script>
    import TaskLoader from './startmenu/TaskLoader'
    import Profil from './startmenu/Profil'
    // import AllTasksService from '../services/AllTasksService'
    export default {
      name: 'start-menu',
      components: {
        Profil,
        TaskLoader
      },
      props: [
        'getReq'
      ],
      methods: {
        scrollTop: function () {
          window.scrollTo(0, 0)
          console.log('OK')
          // this.$store.commit('scroll', id)
        }
      // },
      // beforeCreate: async function () {
      //   console.log('Get Request Alltasks')
      //   this.getReq = (await AllTasksService.init()).data
      //   this.$store.commit('setAufgabenanzahl', this.getReq.length)
      //   console.log('Die insgesamte Aufgaben sind' + this.getReq.length + '< Übergeben | im Store >' + this.$store.state.aufgabenanzahl)// },
      }
    }
</script>

<style scoped>
  /*STARTMENÜ*/
  .startmenü-display{
    position: relative;
    color:white;
    /*background: rgba(0, 0, 0, 0.5);*/
    width: 100%;
  }
  #voidScroll{
    height: 25vw;
    display: block;
  }
</style>
