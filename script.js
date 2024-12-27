// TODO: implement . button and add keyboard support

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function convertID(id) {
    switch (id) {
        case "zero": return 0;
        case "one": return 1;
        case "two": return 2;
        case "three": return 3;
        case "four": return 4;
        case "five": return 5;
        case "six": return 6;
        case "seven": return 7;
        case "eight": return 8;
        case "nine": return 9;
        case "plus": return "+";
        case "minus": return "-";
        case "multiply": return "×";
        case "divide": return "÷";
        case "equal": return "=";
        case "clear": return "clear";
    }
}

function isOperator(input) {
    switch (input) {
        case "+":
        case "-":
        case "×":
        case "÷":
            return true;
        default:
            return false;
    }
}

function operate(a, b, op) {
    switch (op) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "×": return multiply(a, b);
        case "÷": return divide(a, b);
    }
}

function clear() {
    display.textContent = "";
    a = "";
    b = "";
    op = undefined;
}

function roundResult(result) {
    return Math.round(result * 1000) / 1000; // Adjust precision as needed
}


let a, b, op;
a = b = "";

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    const id = e.target.id;
    const input = convertID(id);

    if (input === "clear") {
        clear();
    } else if (input === "=") {
        if (a !== "" && b !== "" && op) {
            if (op === "÷" && b === "0") {
                display.textContent = "Error: Division by 0";
                a = "";
                b = "";
                op = undefined;
            } else {
                a = roundResult(operate(parseFloat(a), parseFloat(b), op));
                display.textContent = a;
                b = "";
                op = undefined;
            }
        } else {
            display.textContent = "Error: Incomplete input";
        }
    } else if (isOperator(input)) {
        if (a !== "" && b !== "" && op) {
            a = roundResult(operate(parseFloat(a), parseFloat(b), op)); // Evaluate the previous pair
            b = ""; // Reset the second operand
            op = input; // Set the new operator
            display.textContent = a; // Update the display with the result
        } else if (a !== "" && op) {
            op = input; // Allow changing the operator
        } else {
            op = input; // Set the operator if not already set
        }
    } else if (!op) {
        a += input; // Capture the first operand
        display.textContent = a;
    } else {
        b += input; // Capture the second operand
        display.textContent = b; // Show the second operand while typing
    }
});


