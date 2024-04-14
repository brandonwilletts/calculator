let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
displayContent("0");

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
            displayContent(firstNumber);
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
            ? displayContent(operate(firstNumber, secondNumber, operator))
            : null

    } else if (event.target.value === "clear") {
        clear();
    }
});

function displayContent (content) {
    let length = content.toString().length;
    if (length <= 8) {
        display.style.cssText = "font-size: 75px";
    } else if (length > 8 && length <= 10) {
        display.style.cssText = "font-size: 60px";
    } else if (length > 10 && length <= 15) {
        display.style.cssText = "font-size: 40px";
    } else {
        display.style.cssText = "font-size: 28px";
    }
    display.textContent = content;
}

function setNumber (number, numberClick) {
    if (number == "0") {
        number = numberClick
    } else {
        (number.toString().length <= 7)
            ? number = number + numberClick
            : null;
    }
    displayContent(number);
    return number;
}

function addDecimal (number) {
    (!number) ? number = 0 + "." : number = number + "."
    displayContent(number);
    return number;
}

function changeSign (number) {
    if (number != 0) {
        number = -number;
        displayContent(number);
        return number;
    } else {
        number = 0;
        displayContent(number);
        return number;
    }
}

function convertToPercentage (number) {
    if (number != 0) {
        number = number / 100;
        displayContent(number);
        return number;
    } else {
        number = 0;
        displayContent(number);
        return number;
    }
}

function reset() {
    firstNumber = "";
    secondNumber = "";
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayContent("0");
}

function operate (num1, num2, operator) {
    switch (operator) {
        case("+"):
        firstNumber = Number(num1) + Number(num2);
        secondNumber = "";
        return firstNumber;

        case("-"):
        firstNumber = num1 - num2;
        secondNumber = "";
        return firstNumber;
        
        case("*"):
        firstNumber = num1 * num2;
        secondNumber = "";
        return firstNumber;

        case("/"):
        firstNumber = num1 / num2;
        secondNumber = "";
        return firstNumber;
    }
}