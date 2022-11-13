function promptfunction() {
    let namn = prompt("Yani vvad heter du??!?!?!", "Din mamma");
    document.getElementById("prompttext").innerHTML =
    "YOO " + namn + "! Llllllääääääääääget?";
}

function hideshow(inp) {
    if (document.getElementById(inp).style.visibility == 'visible') {
        document.getElementById(inp).style.visibility = 'hidden';
    }

    else {
        document.getElementById(inp).style.visibility = 'visible';
    } 
}