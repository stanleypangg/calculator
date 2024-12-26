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
    }
}

let a, b, op;
a = b = "";

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    let id = e.target.id;
    let number = convertID(id)
    if (op) {
        b += number;
        display.textContent = `${a} ${op} ${b}`;
    } else {
        a += number;
        display.textContent = a;
    }
});