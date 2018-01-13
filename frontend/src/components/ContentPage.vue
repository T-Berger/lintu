<template>
  <div id="display">
    <div id="kurs">
      <!--Aufgabenbeschreibung-->
      <task
            v-bind:class="[this.$store.state.contentPageSpacingVerticallyNotTriggered ? true : verticalStyle, horizontalStyle]"/>
      <!--Terminal-->
      <terminal v-bind:class="[this.$store.state.contentPageSpacingVerticallyNotTriggered ? true : verticalStyle, horizontalStyle]"/>
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
    },
    data () {
      return {
        verticalStyle: 'verticalStyle',
        horizontalStyle: 'horizontalStyle'
      }
    }
  }
</script>

<style scoped>
  #display{
    margin-top: 10px;
    width: calc(100vw - var(--breiteNavbar-));
    height: calc(100vh - var(--laengeHeader-));
    position: fixed;
    overflow: hidden;
  }
  .verticalStyle {
    /*position: relative;*/
    width: calc((100vw - var(--breiteNavbar-) - 10px)/2) !important;
    height: calc(100vh - var(--laengeHeader-)) !important;
  }
  .horizontalStyle {
    background-color: yellow;
    height: calc((100vh - var(--laengeHeader-))/2);
    width: calc(100vw - var(--breiteNavbar-));
  }



</style>
