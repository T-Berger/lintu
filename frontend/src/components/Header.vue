<template>
  <v-tabs id="header" dark>
    <v-tabs-bar class="black" dark>
      <v-tabs-slider class="grey darken-3w"></v-tabs-slider>

        <v-tabs-item v-if="this.$store.state.task[0].aufgabennummer == 1" class="v-tabs-item" id="firstTab"
                     disabled >
          <v-icon large dark>mdi-arrow-left-bold</v-icon>
        </v-tabs-item>

        <v-tabs-item v-else class="v-tabs-item" id="firstTab"
        v-on:click="loadTask(back)" >
          <v-icon large dark>mdi-arrow-left-bold</v-icon>
        </v-tabs-item>
      <v-spacer></v-spacer>
        <v-tabs-item centered class="v-tabs-item">
           <span class="dimgrey--text">{{
             this.$store.state.task[0].aufgabennummer +
             ".  " +
             this.$store.state.task[0].aufgabentitel
             }}</span>
        </v-tabs-item>
      <v-spacer></v-spacer>

        <v-tabs-item v-if="this.$store.state.task[0].aufgabennummer === this.$store.state.aufgabenanzahl"
                     class="v-tabs-item" disabled>
          <v-icon large dark>mdi-arrow-right-bold</v-icon>
        </v-tabs-item>

        <v-tabs-item v-else class="v-tabs-item"
        v-on:click="loadTask(forward)">
          <v-icon large dark>mdi-arrow-right-bold</v-icon>
        </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>
  export default {
    props: ['task', 'getReq'],
    data () {
      return {
        back: true,
        forward: false,
        aufgabennummer: '',
        aufgabentitel: 'HALLo'
      }
    },
    methods: {
      loadTask: function (id) {
        console.log('get')

        console.log(this.$store.state.task)
        console.log('ID VON JETZTIGEN ELEMENT' + this.$store.state.task[0])
        var newTask = this.$store.state.task[0]
        var newTaskID = newTask.aufgabennummer
        if (id === true) {
          newTaskID = parseInt(newTaskID) - 1
          console.log('Geh rein')
        } else {
          newTaskID = parseInt(newTaskID) + 1
        }
        if (newTaskID === 5) {
          newTaskID = 1
        }
        console.log(this.$store.state.task[0].aufgabennummer)
        console.log('max>' + this.$store.state.aufgabenanzahl)
        console.log(id)
        this.$store.dispatch('storeNewTaskFromServer', newTaskID)
        console.log('response')
        console.log('Set loading off')
        // this.loader = null
        this.$forceUpdate()
      }
    },
    computed: {
      // reversedMessage: function () {
      //   // `this` points to the vm instance
      //   return this.$store.state.task[0].aufgabentitel +this.$store.state.task[0].aufgabennummer
      // },
      taskCurrentAufgabennummer: function () {
        return this.$store.task[0].aufgabennummer
      }
    // },
    // beforeCreate: function () {
    //   this.aufgabentitel = this.$store.state.task[0].aufgabentitel
    //   this.aufgabennummer = this.$store.state.task[0].aufgabennummer
    }
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
