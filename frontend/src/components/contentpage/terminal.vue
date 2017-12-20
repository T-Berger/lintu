<template>
  <!--Terminal-->
  <div id= "terminal">
    <div v-for='(history, index) in historyinput'>
      <span> hallo ----> </span>
      <span>{{ historyinput[index]}}</span>
    </div>
    <label for = terminalInput>hallo ----></label>
    <input id = "terminalInput" v-model="input" type="text" v-on:keyup.enter="saveString()"
   v-on:keydown.delete.prevent="notDeletableLabel()">
    <!--v-on:keyup.delete="notDeletableLabel()"-->
  </div>
</template>

<script>
    export default {
      name: 'terminal',
      data () {
        return {
          historyinput: [],
          input: 'USERNAME ',
          inputLabel: 'USERNAME '
        }
      },
      methods: {
        saveString () {
          console.log(this.input)
          this.historyinput.push(this.input)
          this.input = this.inputLabel
          console.log(this.inputLabel)
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

          // if (this.inputLabel.length === this.input.length){
          //
          // }
          /* WIRD ANDERS GELÖST MIT
          var labelTemplate = this.inputLabel.substr(this.inputLabel.length - 4)
          console.log(labelTemplate)
          console.log(labelTemplate.charAt(labelTemplate.length - 1))
          console.log(this.input.charAt(this.input.length - 1))
          if (labelTemplate.charAt(labelTemplate.length - 1) === this.input.charAt(this.input.length - 1)) {
            console.log('not delete')
          } else {
            this.input.slice(0, ((this.input.length - 1) - 1)) // DAS HIER IST UNNÖTIG DA SOWIESO DAS BACKSPACE AUSGEFÜHRT WIRD
          } */
        }
      // },
      // computed: {
      //   // inputLabelPlusInput: {
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
