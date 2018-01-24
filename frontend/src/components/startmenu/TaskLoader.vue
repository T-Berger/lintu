<template>
  <v-card class="startmenü-display" id="taskloader">
    <v-container fluid>
      <v-layout row wrap class="startmenü-display mb-4 pb-2 hidden-md-and-down">
        <v-flex
          xs3
          v-for="(card, index) in getReq"
          :key="card.id"
        >
          <v-card raised>
            <div id="buttonbackground" v-on:click="toggle(card)" ref="parentDiv"
                 v-ripple class="elevation-6" v-bind:style="{ background: colorBackgroundDivWithIconButton(card.visible)}"
            >
              <v-btn centered >   <!--ref="iconChildButton"-->
                <v-icon x-large v-on:Click="parentDiv.click()" v-bind:style="{ color: colorIcon(card.difficulty)}">
                  mdi-linux
                </v-icon>
                <v-icon v-if="form.fav_id[index] == true" v-model="form.fav_id[index]" color="yellow accent-4" class="favIcon">
                  mdi-star
                </v-icon>
              </v-btn>
            </div>
            <v-layout v-show="card.visible" v-model="form.parent_id[index]">
              <v-card-title primary-title class="mb-4 pb-4">
                <div>
                  <h3 class="headline mb-0">{{ card.name + " " +  'card_id' + index  + card.id  }}</h3>
                  <div>{{card.aufgabenbeschreibung}}</div>
                </div>
              </v-card-title>
              <v-card-actions dark>
                <v-btn-toggle dark id="buttonbarcard">
                  <v-btn @click.native="form.fav_id[index] = !form.fav_id[index]; $forceUpdate()">
                    <v-icon v-if="form.fav_id[index] == true" color="amber accent-3">mdi-star</v-icon>
                    <v-icon v-else="" >mdi-star</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <!--<v-btn flat color="white lighten 1" outline>Load</v-btn>-->
                  <v-btn
                    id="loadTask"
                         color="success"
                         :loading="loading"
                         @click.native="loader = 'loading2'; loadTask(card)"
                         :disabled="loading"
                  >
                    Load task
                    <span slot="loader">Loading... <v-progress-circular size="18" indeterminate color="white"></v-progress-circular></span>
                  </v-btn>
                </v-btn-toggle>
              </v-card-actions>
            </v-layout>
            <!--<v-layout >-->
              <!--<mobile-task-loader :cards="cards"/>-->
                <!--v-for="card in cards" :key="card.id"-->
                                  <!--:card-desc="card.title"-->
                                  <!--:card-diff="card.difficulty"-->

            <!--</v-layout>-->
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn-toggle dark id="buttonbar" class="mt-6 hidden-md-and-down">
        <v-btn dark class="text-xs-right" value="Expand all" color="black" v-on:click="expandAllCards()">
          <span>Expand all</span>
          <v-icon >mdi-arrow-expand-all</v-icon>
        </v-btn>
        <v-btn dark class="text-xs-right" value="Collapse all" color="black" v-on:click="collapseAllCards()">
          <span>Collapse all</span>
          <v-icon >mdi-arrow-collapse-all</v-icon>
        </v-btn>
      </v-btn-toggle>
      <mobile-task-loader :getReq="getReq" class="hidden-lg-and-up"/>
    </v-container>
  </v-card>
</template>

<script>
  import MobileTaskLoader from '../mobile-components/MobileTaskLoader.vue'
  export default {
    name: 'task-loader',
    components: {
      MobileTaskLoader
    },
    props: [
      'getReq'
    ],
    data () {
      return {
        form: {
          parent_id: [],
          fav_id: ['', false],
          performLoading: ['', false]
        },
        loader: null,
        loading: false
      }
    },
    methods: {
      toggle (card) {
        card.visible = !card.visible
      },
      expandAllCards: function (event) {
        // console.log(this.cards)
        for (var card in this.getReq) {
          // console.log(this.cards[card].name)
          this.getReq[card].visible = true
        }
      },
      collapseAllCards () {
        for (var card in this.getReq) {
          this.getReq[card].visible = false
        }
      },
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
      colorBackgroundDivWithIconButton: function (visible) {
        // console.log(visible)
        if (visible === true) {
          return 'lightgrey'
        } else {
          return 'white'
        }
      },
      toggleFav: function (favIdIndex) {
        // übergabeparameter
        // //form.fav_id[index]
        favIdIndex = !favIdIndex
        console.log(favIdIndex)
        this.$forceUpdate()
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
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        console.log(this[l])
        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
    created: function () {
      console.log('Hoffentlich geht es')
      console.log(this.getReq)
      // console.log(this.props.getReq)
      this.cards = this.getReq
    }
  }
</script>

<style scoped>
  #buttonbar{
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  #buttonbarcard{
    position: absolute;
    bottom: 0px;
    left:0px;
    /*right: 0px;*/
    /*background: black;*/
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
  #loadTask{
    color: black;
    opacity: 1;
    width: 60%;
  }
  .favIcon{
    position: absolute;
    bottom:0px;
    right: 18px;
    /*outline-color: red;*/
    /*outline-width: 2px;*/
  }
  #buttonbackground{
    background-color: lightgrey;
    width: 100%;
  }
  /*STARTMENÜ*/
  .startmenü-display{
    position: relative;
    color:white;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
</style>
