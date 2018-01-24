<template>
  <!--Terminal-->
  <div class= "terminal">
    <!--<div v-for='(history, index) in historyinput'>-->
      <!--<span>{{ historyinput[index]}}</span>-->
    <!--</div>-->
    <div v-for='(outputline, index) in output'>
      <span>{{ output[index]}}</span>
    </div>
    <!--<label for = terminalInput></label>-->
    <input class = "terminalInput" v-model="input" type="text" v-on:keyup.enter="saveString()"
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
         output: [],
         input: 'USERNAME ',
         inputLabel: 'USERNAME ',
         counter: 0
         // socket: io()
       }
     },
     sockets: {
       connect: function () {
         console.log('socket connected')
       },
       disconnect: function () {
         console.log('socket disconnected')
       },
       stdout: function (val) {
         console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
         console.log(val)
         this.output.push(val)
       }
     },
     methods: {
       saveString () {
         var input = this.input.substr(this.input.length - (this.input.length - this.inputLabel.length))
         var inputPlusNewline = input + '\n'
         console.log('input + newline ' + inputPlusNewline)
         // this.$socket.emit('stdin', input)
         this.$socket.emit('stdin', inputPlusNewline)
         console.log(this.input)
         this.historyinput.push(this.input)
         this.output.push(this.input)
         this.input = this.inputLabel
         console.log(this.inputLabel)
         this.counter = this.historyinput.length
         // this.$socket.emit('stdin', this.input)
       },
       notDeletableLabel () {
         var inputDeletable = this.input.substr(this.input.length - (this.input.length - this.inputLabel.length))
         // console.log(inputDeletable)
         // console.log(this.inputLabel)
         // console.log(this.inputLabel.concat(inputDeletable))
         this.input = this.inputLabel.concat(inputDeletable)
         console.log(this.input)
         this.input = this.input.slice(0, (this.input.length - 1))
         console.log(this.input)
       },
       moveHistoryDown () {
         this.counter++
         if (this.counter > this.historyinput.length | this.counter === this.historyinput.length) {
           this.counter--
           this.input = 'USERNAME '
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
           if (this.historyinput.length === 0) {
             this.input = this.inputLabel
           }
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
  .terminal {
    background-color: black;
    word-spacing: 3px;
    font-weight: lighter;
    font-family: 'Ubuntu Mono', monospace;
    color: white;
    /*height: 50vh;*/
    /*width: 200vh;*/
    overflow: scroll;
    /*margin-left: 5%;*/
    float: right;
    text-align: left;
    padding-left: 10vh;
    padding-top: 2vh;
    /*width: 100%;*/
  }

  .terminalInput {
    background-color: black;
    border-color: black;
    height: auto;
    width: 100%;
    color: white;
    outline: none;
    font-family: 'Ubuntu Mono', monospace;
  }
  /*
      SCROLLBAR
  */
  div::-webkit-scrollbar {
    width: 0.45em;
    background-color: white;
  }

  div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  div::-webkit-scrollbar-thumb {
    background-color: black;
    outline: 1px solid slategrey;
  }
</style>
