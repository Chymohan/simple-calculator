// displaying output
let display = document.querySelector("#outputdisplay");
display.value = "";

function appendValue(key) {
    display.value += key;
}

// function to clear display 
function clearDisplay() {
    display.value = "";
}
document.getElementById("clear").addEventListener("click", clearDisplay);

//  function to handel backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}
document.getElementById("backspace").addEventListener("click", backspace);

// function to calculate result 
function showResult() {
    let expression = display.value;

    // Replace only the √ symbol with Math.sqrt()
    expression = expression.replace(/√(\d+|\([^)]*\))/g, "Math.sqrt($1)");
    console.log(expression);

    try {
        display.value = eval(expression);
    } catch {
        display.value = "Error!!";
    }
}
document.getElementById("result").addEventListener("click", showResult);