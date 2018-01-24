<template>
  <div>
    <button class="startmenü-icon caption" v-on:click="switchStartButton()">
      <i class="fab fa-linux"></i>
    </button>
  </div>
</template>

<script>
    export default {
      name: 'mobile-navbar',
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
