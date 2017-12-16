<template>
  <v-layout>
    <v-flex>
     <v-card>
       <v-container fluid>
         <v-layout row wrap>
           <v-flex
             xs3
             v-for="n in 9"
                  :key="n"
                >
                  <v-card raised>
                    <v-btn centered v-on:click="showlabel = !showlabel">
                    <v-icon x-large>
                      fa-cogs
                    </v-icon>
                    </v-btn>
                      <v-layout v-show="showlabel==true">
                        <v-card-title primary-title>
                          <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
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
          showlabel: false
        }
      }
    }
</script>

<style scoped>

</style>
