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

let a, b, op;
a = b = "";

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    let id = e.target.id;
    let input = convertID(id)

    if (input === "=") {
        display.textContent = operate(parseFloat(a), parseFloat(b), op);
    } else if (!op && !isOperator(input)) {
        a += input;
        display.textContent = a;
    } else if (isOperator(input) && b) {
        ;;
    } else if (isOperator(input)) {
        op = input;
        display.textContent = `${a} ${op}`;
    } else if (op) {
        b += input;
        display.textContent = `${a} ${op} ${b}`;
    } 
});