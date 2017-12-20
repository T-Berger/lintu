<template>
  <!--Terminal-->
  <div id= "terminal">
    <div v-for='(history, index) in historyinput'>
      <span> hallo ---> </span>
      <span>{{ historyinput[index]}}</span>
    </div>
    <label for = terminalInput>hallo ----></label>
    <input id = "terminalInput" v-model="input" type="text" v-on:keyup.enter="saveString()"
           v-on:keyup.up="moveHistoryUp()" v-on:keyup.down="moveHistoryDown()"
           v-on:keydown.delete.prevent="notDeletableLabel()">
  </div>
</template>

<script>
    export default {
      name: 'terminal',
      data () {
        return {
          historyinput: [],
          input: 'USERNAME ',
          inputLabel: 'USERNAME ',
          counter: 0
        }
      },
      methods: {
        saveString () {
          console.log(this.input)
          this.historyinput.push(this.input)
          this.input = this.inputLabel
          console.log(this.inputLabel)
          this.counter = this.historyinput.length
        },
        notDeletableLabel () {
          var inputDeletable = this.input.substr(this.input.length - (this.input.length - this.inputLabel.length))
          console.log(inputDeletable)
          console.log(this.inputLabel)
          console.log(this.inputLabel.concat(inputDeletable))
          this.input = this.inputLabel.concat(inputDeletable)
          console.log(this.input)
          this.input = this.input.slice(0, (this.input.length - 1))
          console.log(this.input)
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
