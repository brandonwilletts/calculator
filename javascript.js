let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "0";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
display.textContent = displayValue;

buttons.addEventListener("click", (event) => {    
    if (event.target.classList.contains("btn-num")) {
        (!operator)
            ? display.textContent = setFirstNumber(event.target.value)
            : display.textContent = setSecondNumber(event.target.value)

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
        if (!operator) {
            firstNumber = -firstNumber;
            display.textContent = firstNumber;
        } else {
            secondNumber = -secondNumber;
            display.textContent = secondNumber;
        }

    } else if (event.target.classList.contains("btn-equals")) {
        (firstNumber && operator && secondNumber)
            ? display.textContent = operate(firstNumber, secondNumber, operator)
            : null

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