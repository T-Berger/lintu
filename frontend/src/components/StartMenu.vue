<template>
<!--&gt;class="startmenü-display scroll-y"-->
  <!--id="scroll-target"-->
  <v-layout class="startmenü-display"
            v-scroll="{
            target: '#scroll-target',
            callback: this.onScroll
          }">
    <v-flex class="startmenü-display">
      <task-loader class="startmenü-display"/>
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

    </v-flex>
  </v-layout>
</template>

<script>
    import ListSetting from './startmenu/ListSetting'
    import TaskLoader from './startmenu/TaskLoader'
    export default {
      name: 'start-menu',
      components: {
        ListSetting,
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
          show1: false
        }
      },
      methods: {
        toggle (card) {
          card.visible = !card.visible
        },
        onScroll (e) {
          this.offsetTop = e.target.scrollTop
        }
      }
    }
</script>

<style scoped>
  /*STARTMENÜ*/
  .startmenü-display{
    position: relative;
    color:white;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
</style>
