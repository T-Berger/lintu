<template>
  <div id="display">
    <div id="kurs">
      <!--Aufgabenbeschreibung-->
      <task/>
      <!--Terminal-->
      <terminal/>
    </div>
  </div>

</template>

<script>
  import task from './contentpage/task'
  import terminal from './contentpage/terminal'
  export default {
    name: 'content-page',
    components: {
      task,
      terminal
    }
  }
</script>

<style scoped>

</style>
