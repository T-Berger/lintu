<template>
  <!--Terminal-->
  <div id= "terminal">
    <div v-for='(history, index) in historyinput'>
      <span> hallo ---> </span>
      <span>{{ historyinput[index]}}</span>
    </div>
    <label for = terminalInput>hallo ---></label>
    <input id = "terminalInput" v-model="input" type="text" v-on:keyup.enter="saveString()" v-on:keyup.up="moveHistoryUp()" v-on:keyup.down="moveHistoryDown()">
  </div>
</template>

<script>
    export default {
      name: 'terminal',
      data () {
        return {
          historyinput: [],
          input: '',
          counter: 0
        }
      },
      methods: {
        saveString () {
          console.log(this.input)
          this.historyinput.push(this.input)
          this.input = ''
          this.counter = this.historyinput.length
        },
        moveHistoryDown () {
          this.counter++
          if (this.counter > this.historyinput.length) {
            this.counter--
            this.input = ''
            console.log(this.counter)
          } else {
            this.input = this.historyinput[this.counter]
            console.log(this.counter)
          }
        },
        moveHistoryUp () {
          this.counter--
          if (this.counter < 0) {
            this.counter++
            this.input = this.historyinput[this.counter]
            console.log(this.counter)
          } else {
            this.input = this.historyinput[this.counter]
            console.log(this.counter)
          }
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
    height: 50vh;
    width: 200vh;
    overflow: hidden;
    /*margin-left: 5%;*/
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
