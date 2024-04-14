let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
display.textContent = "0";

buttons.addEventListener("click", (event) => {    
    if (event.target.classList.contains("btn-num")) {
        (!operator)
            ? firstNumber = setNumber(firstNumber, event.target.value)
            : secondNumber = setNumber(secondNumber, event.target.value)

    } else if (event.target.classList.contains("btn-decimal")) {
        (!operator)
            ? firstNumber = addDecimal(firstNumber)
            : secondNumber = addDecimal(secondNumber)       

    } else if (event.target.classList.contains("btn-operator")) {
        if (!secondNumber) {
            (!firstNumber) ? firstNumber = "0" : firstNumber
            operator = event.target.value;
            event.target.focus();
        } else {
            firstNumber = operate(firstNumber, secondNumber, operator);
            secondNumber = "";
            operator = event.target.value;
            display.textContent = firstNumber;
        }
        
    } else if (event.target.value === "sign") {
        (!operator)
            ? firstNumber = changeSign(firstNumber)
            : secondNumber = changeSign(secondNumber)

    } else if (event.target.value === "percent") {
        (!operator)
            ? firstNumber = convertToPercentage(firstNumber)
            : secondNumber = convertToPercentage(secondNumber)

    } else if (event.target.classList.contains("btn-equals")) {
        (firstNumber && operator && secondNumber)
            ? display.textContent = operate(firstNumber, secondNumber, operator)
            : null

    } else if (event.target.value === "clear") {
        clear();
    }
});

function setNumber (number, numberClick) {
    (number === "0") ? number = numberClick : number = number + numberClick
    display.textContent = number;
    return number;
}

function addDecimal (number) {
    (!number) ? number = 0 + "." : number = number + "."
    display.textContent = number;
    return number;
}

function changeSign (number) {
    number = -number;
    display.textContent = number;
    return number;
}

function convertToPercentage (number) {
    number = number / 100;
    display.textContent = number;
    return number;
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
}

function operate (num1, num2, operator) {
    switch (operator) {
        case("+"):
        return Number(num1) + Number(num2);

        case("-"):
        return num1 - num2;

        case("*"):
        return num1 * num2;

        case("/"):
        return num1 / num2;
    }
}