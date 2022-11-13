document.getElementById("test").innerHTML = "Hello JavaScript";

function show(x) {
    document.getElementById(x).style.display="block"
}

function hide(x) {
    document.getElementById(x).style.display="none"
}

/* Number button */
var number = 0;
document.getElementById("number").innerHTML = 3


function addone(x) {
    x = x + 1;

}

function subone(x) {
    x = x - 1;
}
