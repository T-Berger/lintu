<template>
  <div>
    <button id="startmenü-icon" @click.stop="drawer = !drawer"
            v-on:click="switchStartButton()">
      <div class="caption">
      <i class="fab fa-linux"></i>
      </div>

    </button>



    <!--<v-navigation-drawer-->
      <!--temporary-->
      <!--v-model="drawer"-->
      <!--:mini-variant="mini"-->
      <!--dark-->
      <!--absolute-->
    <!--&gt;-->
      <!--<v-list class="pa-1">-->
        <!--<v-list-tile v-if="mini" @click.stop="mini = !mini">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>chevron_right</v-icon>-->
          <!--</v-list-tile-action>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile avatar tag="div">-->
          <!--<v-list-tile-avatar>-->
            <!--<img src="https://randomuser.me/api/portraits/men/85.jpg" />-->
          <!--</v-list-tile-avatar>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>John Leider</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--<v-list-tile-action>-->
            <!--<v-btn icon @click.stop="mini = !mini">-->
              <!--<v-icon>chevron_left</v-icon>-->
            <!--</v-btn>-->
          <!--</v-list-tile-action>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
      <!--<v-list class="pt-0" dense>-->
        <!--<v-divider light></v-divider>-->
        <!--<v-list-tile v-for="item in items" :key="item.title" @click="">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>{{ item.icon }}</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
  </div>
</template>

<script>
    export default {
      name: 'mobile-navbar',
      data () {
        return {
          drawer: null,
          items: [
            { title: 'Home', icon: 'dashboard' },
            { title: 'About', icon: 'question_answer' }
          ],
          mini: false,
          right: null
        }
      },
      methods: {
        switchStartButton: function () {
          this.$store.commit('switchStartMenuButton')
        }
      }
    }
</script>

<style scoped>
  #startmenü-icon:active{
    color:white;
    background-color: #303030;
    outline: none;
  }
  button.selected{
    color:white !important;
    background-color: #303030 !important;
  }
</style>
