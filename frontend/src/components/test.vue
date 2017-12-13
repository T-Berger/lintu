<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>ICH BIN EIN IDIOT</h2>
    <p>{{ task}}</p>
  </div>
</template>

<script>
  import TasksService from '@/services/TasksService'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        task: {}
      }
    },
    async mounted () {
      this.task = (await TasksService.index()).data
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
