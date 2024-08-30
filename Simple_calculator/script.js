// script.js

const operationDisplay = document.getElementById('operation');
const resultDisplay = document.getElementById('result');
let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');

        if (value === 'C') {
            resetCalculator();
        } else if (value === 'DEL') {
            deleteLastElement();
        } else if (value === '=') {
            if (operator && currentInput !== '') {
                secondValue = currentInput;
                calculate();
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                firstValue = currentInput;
                operator = value;
                currentInput = '';
                operationDisplay.textContent = firstValue + ' ' + operator;
            }
        } else {
            currentInput += value;
            operationDisplay.textContent = firstValue + ' ' + operator + ' ' + currentInput;
        }
    });
});

function calculate() {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }
    resultDisplay.textContent = result;
    currentInput = result.toString();
    operator = '';
    firstValue = '';
    secondValue = '';
}

function resetCalculator() {
    currentInput = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    operationDisplay.textContent = '';
    resultDisplay.textContent = '';
}

function deleteLastElement() {
    if (currentInput !== '') {
        currentInput = '';
    } else if (operator !== '') {
        operator = '';
    } else if (firstValue !== '') {
        firstValue = '';
    }
    operationDisplay.textContent = firstValue + ' ' + operator + ' ' + currentInput;
}
