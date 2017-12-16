<template>
  <v-card class="startmenü-display">
    <v-container fluid>
      <v-layout row wrap class="startmenü-display mb-4 pb-2">
        <v-flex
          xs3
          v-for="(card, index) in cards"
          :key="card.id"
        >
          <v-card raised>
            <v-btn centered v-on:click="toggle(card)">
              <v-icon x-large v-bind:style="{ color: colorIcon(card.difficulty)}">
                mdi-linux
              </v-icon>
            </v-btn>
            <v-layout v-show="card.visible" v-model="form.parent_id[index]">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ card.name + " " +  'name_id' + index  + card.id  }}</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Load</v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn-toggle dark id="buttonbar" class="mt-6">
        <v-btn dark class="text-xs-right" value="Expand all" color="black" v-on:click="expandAllCards()">
          <span>Expand all</span>
          <v-icon >mdi-arrow-expand-all</v-icon>
        </v-btn>
        <v-btn dark class="text-xs-right" value="Collapse all" color="black" v-on:click="collapseAllCards()">
          <span>Collapse all</span>
          <v-icon >mdi-arrow-collapse-all</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-container>
  </v-card>
</template>

<script>
    export default {
      name: 'task-loader',
      data () {
        return {
          cards: [
            {name: 'MacBook Air', id: 1, visible: false, difficulty: 10},
            {name: 'MacBook Pro', id: 2, visible: false, difficulty: 40},
            {name: 'Lenovo W530', id: 3, visible: false, difficulty: 80},
            {name: 'Acer Aspire One', id: 4, visible: false, difficulty: 100}
          ],
          form: {
            parent_id: []
          },
          showlabel: false,
          show0: false,
          show1: false
        }
      },
      methods: {
        toggle (card) {
          card.visible = !card.visible
        },
        expandAllCards: function (event) {
          console.log(this.cards)
          for (var card in this.cards) {
            console.log(this.cards[card].name)
            this.cards[card].visible = true
          }
        },
        collapseAllCards () {
          for (var card in this.cards) {
            this.cards[card].visible = false
          }
        },
        colorIcon: function (difficulty) {
          console.log(difficulty)
          if (difficulty <= 33) {
            return 'green'
          } else if (difficulty <= 66) {
            return 'orange'
          } else {
            return 'red'
          }
        }
      }
      // },
      // computed: {
      //   colorIcon: function (difficulty) {
      //     console.log(difficulty)
      //     if (difficulty <= 33) {
      //       return 'green'
      //     } else if (difficulty <= 66) {
      //       return 'orange'
      //     } else {
      //       return 'red'
      //     }
      //   }
      // }
    }
</script>

<style scoped>
#buttonbar{
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-top: 150px;
}
</style>
