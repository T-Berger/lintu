<template>
  <v-flex xs6 offset-xs3 class="login">
    <h3>Sign In</h3>
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
      ></v-text-field>
    </v-form>
    <v-btn color="green" dark v-on:click="signIn">Connect</v-btn>
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
  </v-flex>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function () {
      return {
        email: '',
        password: '',
        /* eslint-disable */
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    methods: {
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>

