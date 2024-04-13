let firstNumber;
let secondNumber;
let operator;
let displayValue = "0";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    displayValue = event.target.value;
    display.textContent = displayValue;
});

function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

function operate (num1, num2, operator) {
    switch (operator) {
        case("+"):
        return add(num1, num2);

        case("-"):
        return subtract(num1, num2);

        case("*"):
        return multiply(num1, num2);

        case("/"):
        return divide(num1, num2);
    }
}