<template>
  <v-layout>
    <v-flex>
     <v-card>
       <v-container fluid>
         <v-layout row wrap>
           <v-flex
             xs3
             v-for="(card, index) in cards"
                  :key="card.id"
                >
                  <v-card raised>
                    <v-btn centered v-on:click="toggle(card)">
                    <v-icon x-large>
                      fa-cogs
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
            </v-container>
          </v-card>
        </v-flex>
  </v-layout>
</template>

<script>
    export default {
      name: 'start-menu',
      data () {
        return {
          cards: [
            {name: 'MacBook Air', id: 1, visible: false},
            {name: 'MacBook Pro', id: 2, visible: false},
            {name: 'Lenovo W530', id: 3, visible: false},
            {name: 'Acer Aspire One', id: 4, visible: false}
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
        }
      }
    }
</script>

<style scoped>

</style>
