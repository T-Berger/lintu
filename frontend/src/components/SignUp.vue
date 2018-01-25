<template>
  <v-flex xs6 offset-xs3  class="signUp">
    <h3>Let's create a new account !</h3><br>
    <v-form
      name="lintu-login"
      autocomplete="off">
      <v-text-field
        label="Email"
        v-model="email"
        :rules="emailRules"
      ></v-text-field>
      <br>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        autocomplete="new-password"
        :rules="passwordRule"
      ></v-text-field>
    </v-form>
    <v-btn color="green" dark v-on:click="signUp">Sign Up</v-btn>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </v-flex>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function () {
      return {
        email: '',
        password: '',
        /* eslint-disable */
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRule: [
          (v) => v.length >= 6 || 'Password must be at least 6 characters'
        ]
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
