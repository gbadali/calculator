const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]')
const previousOperand = document.querySelector('[data-previus-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const clearButton = document.querySelector('[data-allClear]');
const equalsButton = document.querySelector('[data-equal]');

var current = '';
var previous = '';
var operator = '';

numberButtons.forEach(btn => {
    btn.addEventListener('click', function(){
        var value = this.getAttribute('data-number');
        if (value === '.') {
            if (current.includes(".")) {
                return;
            }
            current += value;
        }
        current += value;
        currentOperand.textContent += value

    })
});

operatorButtons.forEach(btn => {
    btn.addEventListener('click', function(){
        operator = this.getAttribute('data-operator');
        if (previous === '') {
            previous = current;
            previousOperand.textContent = previous + ' ' + operator;
            currentOperand.textContent = '';
            current = '';
        } else {
            result = operate(operator, Number(previous), Number(current));
            previous = result;
            console.log(result, current, previous, operator);
            previousOperand.textContent = previous;
            currentOperand.textContent = '';
            current = '';
        }
    })
});

clearButton.addEventListener('click', function() {
    current = '';
    previous = '';
    previousOperand.textContent = previous;
    currentOperand.textContent = current;
})

equalsButton.addEventListener('click', function() {
    previous = operate(operator, Number(previous), Number(current));
    previousOperand.textContent = previous;
})





function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case 'div':
            return divide(a, b);
            break;
        case 'mult':
            return multiply(a, b);
            break;
        case 'subt':
            return subtract(a, b);
            break;
        case 'add':
            return add(a, b);
            break
        default:
            break;
    }
}
