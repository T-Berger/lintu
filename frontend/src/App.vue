<template>
  <div id="app">
    <v-app>



      <main>
        <nav-bar />
        <page-header :task="task"/>
        <aufgaben :task="task"/>
        <v-container>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'
  import NavBar from './components/NavBar'
  import Aufgaben from './components/Aufgaben'
  import TasksService from '@/services/TasksService'
  export default {
    name: 'app',
    components: {
      Aufgaben,
      NavBar,
      PageHeader
    },
    data () {
      return {
        task: 'Hallo'
      }
    },
    async mounted () {
      this.task = (await TasksService.index()).data
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

  .danger-alert {
    color: red;
  }
</style>
