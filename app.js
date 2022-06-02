let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;
let counter = true;
let operandVal = '';
let val = 0;

function operate(a,b,op) {
    if (op == '+') {
        return add(a,b);
    }
    else if (op == '-') {
        return subtract(a,b);
    }
    else if (op == '*') {
        return multiply(a,b);
    }   
    else if (op == '/') {
        return divide(a,b);
    }
}

let numButton = document.querySelectorAll('.number');
let operatorButton = document.querySelectorAll('.operator');
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equals');
let currentOutput = document.querySelector('.current');
let previousOutput = document.querySelector('.previous');



numButton.forEach((numButton) => {
    numButton.addEventListener('click', (e) => {
        currentOutput.textContent += e.target.innerHTML;
    });
});

clearButton.addEventListener('click', () => {
    previousOutput.textContent = '';
    currentOutput.textContent = '';
    counter = true;
});

equalsButton.addEventListener('click', () => {
    if (operandVal = '') {
        currentOutput.textContent = currentOutput.textContent;
    }
    else {
        previousOutput.textContent = previousOutput.textContent + ' ' + currentOutput.textContent + ' = ';
        currentOutput.textContent = operate(parseFloat(previousOutput.textContent), parseFloat(currentOutput.textContent), operandVal);
        counter = true;
    }
    
})

operatorButton.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (e) => {

        if (previousOutput.textContent == '') {
            previousOutput.textContent = '0';
        }
        else {
            val = operate(parseFloat(previousOutput.textContent), parseFloat(currentOutput.textContent), operandVal)
        }

        operandVal = e.target.innerHTML;

        if (counter) {
            previousOutput.textContent = currentOutput.textContent + ' ' + operandVal;
            currentOutput.textContent = '';
            counter = false;
        }
        else {
            previousOutput.textContent = val + ' ' + operandVal;
            currentOutput.textContent = '';
        }
    })
})

