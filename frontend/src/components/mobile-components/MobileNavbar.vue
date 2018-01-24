<template>
  <div>
    <button class="startmenü-icon" v-on:click="switchStartButton()">
      <div class="caption">
      <i class="fab fa-linux"></i>
      </div>
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
