//Biblothek Autosize js
/*autosize(document.getElementById("input"));

//onkeyup="auto_grow(this)"
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}*/
/*function sendAnswer() {
    var newInput = document.createElement("input");
    newInput.appendChild();
}*/
/*$('#terminalInput').bind('keyPress' ,function (e) {
    if (e.keyCode == 13){
        var newInput = document.createElement("input");
        newInput.appendChild();
    }
});*/
/*$("#terminalInput").keypress(function(e) {
    if(e.which == 13) {
        document.getElementById("terminal").appendChild(document.createElement("p"));
        document.getElementById("terminal").appendChild(document.createElement("input", id="terminalInput"));
    }
});*/


new Vue({
    el: '#app',
    data() {
        return {
            historyInput: [],
            input: ""
        }
        },
    methods:{
        saveString(){
            console.log(this.input)
            this.historyInput.push(this.input)
            this.input= ""
        }
    }

})