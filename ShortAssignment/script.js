function changeText(){
    var display = document.getElementById("display").value;
    var stored = localStorage.display;
    if(display == "" && display != stored) {
        background = localStorage.background
    }
    headID = display.concat("Head");
    textID = display.concat("Body");
    head = document.getElementById(headID).textContent;
    text = document.getElementById(textID).textContent;
    document.getElementById("displayHead").innerHTML =  head;
    document.getElementById("displayText").innerHTML = text;
    document.set
    //store the value
    localStorage.display = display;
}