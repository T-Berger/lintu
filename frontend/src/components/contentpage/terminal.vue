<template>
  <!--Terminal-->
  <div id= "terminal">
    <div v-for='(history, index) in historyInput'>
      <span> hallo ---> </span>
      <span>{{ historyInput[index]}}</span>
    </div>
    <div id ="form">
    <input id = "terminalInput" v-model="input" type="text" v-on:keyup.enter="saveString()">
  </div>
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
  #terminal {
    background-color: black;
    word-spacing: 3px;
    font-weight: lighter;
    font-family: 'Ubuntu Mono', monospace;
    color: white;
    height: 50vh;
    width: 100%;
    resize: both;
    overflow: hidden;
    margin-left: 5%;
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
