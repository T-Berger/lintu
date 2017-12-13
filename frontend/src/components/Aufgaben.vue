<template>
  <div>
  <p>{{ task[0].aufgabenbeschreibung }}</p>
  </div>
</template>

<script>
  export default {
    props: [
      'task'
    ]
  }
</script>

<style scoped>

</style>
