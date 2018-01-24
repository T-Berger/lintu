<template>
  <v-list two-line dark>
    <template>
      <v-subheader >Hier sind die verfügbaren Aufgaben</v-subheader>
      <v-divider></v-divider>
      <v-list-tile avatar v-bind:key="card.name" @click="loadTask(card)" v-for="(card, index) in getReq"
                   :key="card.id">
        <v-list-tile-avatar>
          <v-icon x-large v-on:Click="" v-bind:style="{ color: colorIcon(card.difficulty)}">
            mdi-linux
          </v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="card.id + card.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="card.name"></v-list-tile-sub-title>
        </v-list-tile-content>
        <br>
      </v-list-tile>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>

<script>
    export default {
      props: ['getReq'],
      name: 'mobile-task-loader',
      methods: {
        colorIcon: function (difficulty) {
          // console.log(difficulty)
          if (difficulty <= 33) {
            return 'green'
          } else if (difficulty <= 66) {
            return 'orange'
          } else {
            return 'red'
          }
        },
        loadTask: async function (card) {
          console.log(card)
          console.log('get')
          console.log(card.id)
          console.log(this.$store.state.task)
          this.$store.dispatch('storeNewTaskFromServer', card.id)
          console.log('response')
          console.log('Set loading off')
          // this.loader = null
        }

      },
      mounted: function () {
        console.log('Mobile-Darstellung-Switch')
        console.log(this.getReq)
      }
    }
</script>

<style scoped>

</style>
