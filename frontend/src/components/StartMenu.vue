<template>
  <v-layout>
    <v-flex class="startmenü-display">
      <task-loader class="startmenü-display" :getReq="getReq"/>
      <br>
      <p id="scroll">
        "But I must explain to you how all this mistaken idea of denouncing pleasur
        e and praising pain was born and I will give you a complete account of the system,
        and expound the actual teachings of the great explorer of the truth, the master-build
        er of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
        is pleasure, but because those who do not know how to pursue pleasure rationally encou
        nter consequences that are extremely painful. Nor again is there anyone who loves or pu
        rsues or desires to obtain pain of itself, because it is pain, but because occasionally c
        ircumstances occur in which toil and pain can procure him some great pleasure. To take a t
        rivial example, which of us ever undertakes laborious physical exercise, except to obtain s
        ome advantage from it? But who has any right to find fault with a man who chooses to enjoy
        a pleasure that has no annoying consequences, or one who avoids a pain that produces no resu
        ltant pleasure?"
      </p>
      <list-setting  class="startmenü-display"/>
      <profil id="profil"/>
      <div id="voidScroll"></div>
      <v-btn v-on:click="toggle()">asasdasdas</v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
    import ListSetting from './startmenu/ListSetting'
    import TaskLoader from './startmenu/TaskLoader'
    import Profil from './startmenu/Profil'
    import AllTasksService from '../services/AllTasksService'
    export default {
      name: 'start-menu',
      components: {
        ListSetting,
        Profil,
        TaskLoader
      },
      data () {
        return {
          cards: [
            {name: 'MacBook Air', id: 1, visible: false},
            {name: 'MacBook Pro', id: 2, visible: false},
            {name: 'Lenovo W530', id: 3, visible: false},
            {name: 'Acer Aspire One', id: 4, visible: false}
          ],
          form: {
            parent_id: []
          },
          showlabel: false,
          show0: false,
          show1: false,
          getReq: []
          // created:
          //   function () {
          //     console.log('Get Request Alltasks')
          //     // this.getReq = (await AllTasksService.init()).data
          //     console.log('this.getReq')
          //
          // }
        }
      },
      methods: {
        toggle () {
          // card.visible = !card.visible
          console.log('HALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLO')
          console.log(this.getReq)
        }
      },
      // mounted: {
      //   // startMenuMounted: function () {
      //   //   console.log('startMenuMountedOnTrue')
      //   //   this.$store.commit('startMenuMountedOnTrue')
      //   // }
      // },
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
