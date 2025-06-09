// Result entry
const resultEntry = document.getElementById("result");

// Functions
const CEbutton = document.getElementById("CE");
const Cbutton = document.getElementById("C");
const BackspaceButton = document.getElementById("previous");
const DivisionButton = document.getElementById("division");
const multiplyButton = document.getElementById("multiply");
const MinusButton = document.getElementById("minus");
const PlusButton = document.getElementById("plus");
const dotButton = document.getElementById("dot");
const EqualsButton = document.getElementById("equals");

// Numbers Buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let enabled = true;
let expression = ["0"];

Cbutton.addEventListener("click", () => {
    if (enabled == true) {
        resultEntry.value = "";
        resultEntry.disabled = true;
        enabled = false;
    }
    
    else if (enabled == false) {
        resultEntry.value = "0";
        resultEntry.disabled = false;
        enabled = true;
        expression = ["0"];
    }
})

CEbutton.addEventListener("click", () => {
    if (enabled == true) {
        resultEntry.value = "0";
        expression = ["0"];
    }
})

one.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "1";
            expression = ["1"]
        }
        else {
            resultEntry.value += "1";
            expression.push("1");
        }
    }
})

two.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "2";
            expression = ["2"]
        }
        else {
            resultEntry.value += "2";
            expression.push("2");
        }
    }
})

three.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "3";
            expression = ["3"]
        }
        else {
            resultEntry.value += "3";
            expression.push("3");
        }
    }
})

four.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "4";
            expression = ["4"]
        }
        else {
            resultEntry.value += "4";
            expression.push("4");
        }
    }
})

five.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "5";
            expression = ["5"]
        }
        else {
            resultEntry.value += "5";
            expression.push("5");
        }
    }
})

six.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "6";
            expression = ["6"]
        }
        else {
            resultEntry.value += "6";
            expression.push("6");
        }
    }
})

seven.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "7";
            expression = ["7"]
        }
        else {
            resultEntry.value += "7";
            expression.push("7");
        }
    }
})

eight.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "8";
            expression = ["8"]
        }
        else {
            resultEntry.value += "8";
            expression.push("8");
        }
    }
})

nine.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "9";
            expression = ["9"]
        }
        else {
            resultEntry.value += "9";
            expression.push("9");
        }
    }
})

zero.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "0";
            expression = ["0"]
        }
        else {
            resultEntry.value += "0";
            expression.push("0");
        }
    }
})

DivisionButton.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value != "Error") {
            resultEntry.value += "/";
            expression.push("/");
        }
        else {
            resultEntry.value = "/";
            expression = ["/"];
        }
    }
})

multiplyButton.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value != "Error") {
            resultEntry.value += "x";
            expression.push("*");
        }
        else {
            resultEntry.value = "x";
            expression = ["*"];
        }
    }
})

MinusButton.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value != "Error") {
            resultEntry.value += "-";
            expression.push("-");
        }
        else {
            resultEntry.value = "-";
            expression = ["-"];
        }
    }
})

PlusButton.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        if (resultEntry.value != "Error") {
            resultEntry.value += "+";
            expression.push("+");
        }
        else {
            resultEntry.value = "+";
            expression = ["+"];
        }
    }
})


dotButton.addEventListener("click", () => {
    if (enabled == true && resultEntry.value.length < 9) {
        resultEntry.value += ".";
        expression.push(".");
    }
})

BackspaceButton.addEventListener("click", () => {
    if (enabled == true) {
        if (resultEntry.value == "0" || resultEntry.value == "Error") {
            resultEntry.value = "0";
        }
        else {
            resultEntry.value = resultEntry.value.slice(0, -1);
            expression.pop();
            if (resultEntry.value == "" || resultEntry.value == "Error") {
                resultEntry.value = "0";
            }
        } 
    }
})

EqualsButton.addEventListener("click", () => {
    let result = expression.join("");
    try {
        result = eval(result);
        result = result.toString();
        if (result.length > 9) {
            result = result.slice(0, 9);
        }
        resultEntry.value = result;
        expression = [result];
    }
    catch {
        resultEntry.value = "Error";
    }
})
