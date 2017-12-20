<template>
  <!--Terminal-->
  <div id= "terminal">
    <div v-for='(history, index) in historyinput'>
      <span> hallo ----> </span>
      <span>{{ historyinput[index]}}</span>
    </div>
    <label for = terminalInput>hallo ----></label>
    <input id = "terminalInput" v-model="input" type="text" v-on:keyup.enter="saveString()">
  </div>
</template>

<script>
    export default {
      name: 'terminal',
      data () {
        return {
          historyinput: [],
          input: ''
        }
      },
      methods: {
        saveString () {
          console.log(this.input)
          this.historyinput.push(this.input)
          this.input = ''
        }
      }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
  #terminal {
    background-color: black;
    word-spacing: 3px;
    font-weight: lighter;
    font-family: 'Ubuntu Mono', monospace;
    color: white;
    height: 100vh;
    width: 100vh;
    resize: both;
    overflow: hidden;
    margin-left: 5%;
    text-align: left;
  }

  #terminalInput {
    background-color: black;
    border-color: black;
    height: auto;
    width: 100%;
    color: white;
    outline: none;
    font-family: 'Ubuntu Mono', monospace;
  }

</style>
