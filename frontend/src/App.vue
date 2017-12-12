<template>
  <div id="app">
    <v-app>



      <main>
        <nav-bar />
        <page-header />
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'
  import NavBar from './components/NavBar'

  export default {
    name: 'app',
    components: {
      NavBar,
      PageHeader
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
