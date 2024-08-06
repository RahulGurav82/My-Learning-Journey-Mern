function appendToDisplay(value){
    document.getElementById("display").innerText += value;
}

function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function backSpace() {
    let display = document.getElementById("display").innerText;
    document.getElementById("display").innerText = display.slice(0, -1); 
}

function Calculate() {
    let display = document.getElementById("display").innerText;
    try {
        document.getElementById("display").innerText = eval(display);
    } catch (error) {
        document.getElementById("display").innerText = "error"
    }
}