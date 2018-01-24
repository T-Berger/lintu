<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data () {
      return {
      }
    },
    async mounted () {
    },
    computed: {
    },
    beforeCreate: async function () {
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
