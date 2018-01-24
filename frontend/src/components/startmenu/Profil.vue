/* eslint-disable */
<template>
  <v-layout id="profil"><!--class="ml-4 mr-4 pa-2"-->
    <v-container>
      <v-flex>
          <v-container id="imageContainer">
            <v-btn fab round id="profilPic">
              <image v-if="profilPic != null" src="profilPic" height="200px">
              </image>
              <v-icon  drark x-large v-else="">
                mdi-account
              </v-icon>
            </v-btn>
          </v-container>
          <v-container id="profilSettings">
              <div>
                <h3 class="headline mb-0">Profil</h3><br>
                <p><strong>E-mail: </strong>{{email}}</p>
                <p><strong>userId: </strong>{{userId}}</p>
              </div>

            <v-btn flat color="grey" v-on:click="logout">Logout</v-btn>

          </v-container>
      </v-flex>
    </v-container>
  </v-layout>

</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'profil',
    data () {
      return {
        name: '',
        email: ''
      }
    },
    methods: {
      logout: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    },

    created () {
      this.user = firebase.auth().currentUser
      if (this.user) {
        this.email = this.user.email
        this.userId = this.user.uid
      }
    }
  }
</script>

<style scoped>
  /*#profilPic{*/
  /*position: relative;*/
  /*top: 0px;*/
  /*left: 0px;*/
  /*padding-top: 2vw;*/
  /*padding-left: 2vw;*/
  /*margin: 20px 22px 40px 40px*/
  /*}*/
  #imageContainer{
    position: relative;
    top:20px;
    left:0px;
    width: 20%;
    height: 100%;
    border-right: dimgrey 2px double;
    margin-left: 0px;
    float: left;
  }
  #profilSettings{
    position: relative;
    top:0px;
    padding-top: 0px;
  }


</style>
