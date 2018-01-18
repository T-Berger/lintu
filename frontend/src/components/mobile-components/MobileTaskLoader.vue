<template>
  <v-list two-line dark>
    <template>
      <v-subheader >Hier sind die verfügbaren Aufgaben</v-subheader>
      <v-divider></v-divider>
      <v-list-tile avatar v-bind:key="card.name" @click="" v-for="(card, index) in cards"
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
      // props: {
      //   cardDesc: {
      //     type: String,
      //     default: 'default description text'
      //   },
      //   cardDiff: {
      //     type: String,
      //     default: '5'
      //   }
      // },
      props: ['cards'],
      //   {
      //     // getReq: 'getReq',
      //   // cards: 'cards'
      // },
      name: 'mobile-task-loader',
      // data () {
      //   return {
      //     cardslocal: []
      //   }
      // },
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
        }
      },
      mounted: function () {
        console.log('Mobile-Darstellung-Switch')
        // console.log(this.props.cards)
        // this.cardslocal = this.cards
        // console.log(this.cardslocal)
      }
    }
</script>

<style scoped>

</style>
