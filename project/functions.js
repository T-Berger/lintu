//Biblothek Autosize js
autosize(document.getElementById("input"));

//onkeyup="auto_grow(this)"
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
