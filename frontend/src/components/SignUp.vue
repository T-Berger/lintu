<template>
  <div class="sign-up">
    <h3>Let's create a new account !</h3><br>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <div class="text-xs-center">
      <v-bottom-sheet v-model="sheet">
        <v-btn slot="activator" color="green" dark v-on:click="signUp">Sign Up</v-btn>
        <v-list>
          <v-list-tile
            v-for="tile in tiles"
            :key="tile.title"
            @click="sheet = false"
          >
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img :src="`/static/doc-images/bottom-sheets/${tile.img}`" :alt="tile.title">
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-bottom-sheet>
    </div>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('StartMenu')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        )
      }
    }
  }
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
