const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(input) {
        display.value = "";
}

function calculate() {
    try {
        if (display.value.trim() === "") {
            display.value = "";
        } else {
            display.value = eval(display.value)
        }
    } 
    catch(error) {
        display.value = "Error"

        setTimeout(function() {
            display.value = "";
        }, 1000);
    }
}