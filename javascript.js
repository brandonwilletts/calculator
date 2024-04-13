let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "0";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {    
    if (event.target.classList.contains("btn-num")) {
        (!operator)
            ? display.textContent = setFirstNumber(event.target.value)
            : display.textContent = setSecondNumber(event.target.value)

    } else if (event.target.classList.contains("btn-operator")) {
        operator = event.target.value;
        event.target.focus();

    } else if (event.target.classList.contains("btn-equals")) {
        display.textContent = (operate(firstNumber, secondNumber, operator));

    } else if (event.target.value === "clear") {
        display.textContent = clear();
    }
});

function setFirstNumber(numClicked) {
    if (numClicked) {
        firstNumber = firstNumber + numClicked;
    }
    return Number(firstNumber);
}

function setSecondNumber(numClicked) {
    if (numClicked) {
        secondNumber = secondNumber + numClicked;
    }
    return Number(secondNumber);
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "0";
    return displayValue;
}

function add (num1, num2) {
    return Number(num1) + Number(num2);
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