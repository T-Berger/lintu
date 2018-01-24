<template>
  <div class="editor">
    <div v-html="compiledMarkdown" class="taskContent">
    </div>
    <v-btn v-on:click="showSolution = !showSolution" v-if="showSolution" color="primary">Lösung verstecken</v-btn>
    <v-btn v-else v-on:click="showSolution = !showSolution" color="primary">Lösung anzeigen</v-btn>
    <div v-if="showSolution == true" v-html="compiledMarkdownSolution">
    </div>
  </div>
</template>

<script>
    import marked from 'marked'
    import _ from 'lodash'
    export default {
      name: 'task',
      data () {
        return {
          input: '_This is an assignment to the class [Programmieren 3](https://hsro-inf-prg3.github.io) at the [University of Applied Sciences Rosenheim](http://www.fh-rosenheim.de)._\n' +
          '\n' +
          '# Assignment 1: A (Java) software engineers toolbox\n' +
          '\n' +
          '\t- Back on your computer, checkout `master`, and pull the changes to update your local copy.\n',
          solution: 'BQB',
          showSolution: false
        }
      },
      computed: {
        compiledMarkdown: function () {
          return marked(this.input, { sanitize: true })
        },
        compiledMarkdownSolution: function () {
          return marked(this.solution, { sanitize: true })
        }
      },
      methods: {
        update: _.debounce(function (e) {
          this.input = e.target.value
        }, 300)
      }

    }
</script>

<style scoped>
  html, body, .editor {
    background-color: whitesmoke;
    /*margin: 0;*/
    /*height: 40vh;*/
    /*width: 200vh;*/
    font-family: 'Helvetica Neue', Arial, sans-serif;
    overflow: scroll;
    overflow-x: hidden;
    float:left;
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
  /*textarea, #editor div {*/
    /*display: inline-block;*/
    /*width: 49%;*/
    /*height: 100%;*/
    /*vertical-align: top;*/
    /*box-sizing: border-box;*/
    /*padding: 0 20px;*/
  /*}*/

  /*textarea {*/
    /*border: none;*/
    /*border-right: 1px solid #ccc;*/
    /*resize: none;*/
    /*outline: none;*/
    /*background-color: #f6f6f6;*/
    /*font-size: 14px;*/
    /*font-family: 'Monaco', courier, monospace;*/
    /*padding: 20px;*/
  /*}*/

  /*code {*/
    /*color: #f66;*/
  /*}*/

</style>
