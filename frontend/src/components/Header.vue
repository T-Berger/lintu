<template>
  <v-tabs id="header" dark>
    <v-tabs-bar class="black" dark>
      <v-tabs-slider class="grey darken-3w"></v-tabs-slider>
        <v-tabs-item class="v-tabs-item" id="firstTab">
          <v-icon large dark>mdi-arrow-left-bold</v-icon>
        </v-tabs-item>
      <v-spacer></v-spacer>
        <v-tabs-item centered class="v-tabs-item">
           <span class="dimgrey--text">{{ task[0].aufgabentitel }}</span>
        </v-tabs-item>
      <v-spacer></v-spacer>
        <v-tabs-item class="v-tabs-item">
          <v-icon large dark>mdi-arrow-right-bold</v-icon>
        </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>
  export default {
    props: ['task']
  }
</script>

<style scoped>
  .tabs__bar{
    height: var(--laengeHeader-);
  }
  #header{
    position: fixed;
    top: 0;
  }
  .theme--dark{
    color:  dimgrey !important;

  }
  .v-tabs-item:hover {
    background: #ff6e42;
    color: #fffcfb;
  }
  .v-tabs-item:hover:before, .v-tabs-item:hover:after {
    -webkit-transition: all .25s linear;
    transition: all .25s linear;
  }
  .v-tabs-item:hover:before {
    background: #b65234;
  }
  .v-tabs-item:hover:after {
    background: #b65234;
  }
  .v-tabs-item:before, .v-tabs-item:after {
    content: '';
    position: absolute;
  }
  .v-tabs-item:after {
    background: #181818;
  }
  .v-tabs-item:before {
    background: #121212;
  }
  #firstTab{
    margin-left: 30px;
  }
</style>
