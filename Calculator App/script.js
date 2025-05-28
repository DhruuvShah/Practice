const display = document.getElementById('display');
const buttons = document.querySelectorAll('#calculator button');

let expression = "";
let firstOperand = null;
let operator = null;

function updateDisplay() {
    display.value = expression || '0';
}

function resetCalculator() {
    expression = '';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function handleOperatorInput(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(expression);
        expression += op; // Append the operator to the display
    } else if (operator) {
        calculateResult();
        firstOperand = parseFloat(expression);
        expression += op; // Append the new operator
    } else {
        expression += op; // If first operand exists but no operator yet
    }
    operator = op;
}

function handlePercentage() {
    expression = (parseFloat(expression) / 100).toString();
    updateDisplay();
}

function calculateResult() {
    if (operator && firstOperand !== null) {
        const secondOperand = parseFloat(expression.split(operator)[1]); // Extract second operand after the operator
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    expression = 'Error: Division by zero';
                    updateDisplay();
                    return;
                }
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        expression = result.toString();
        firstOperand = null;
        operator = null;
        updateDisplay();
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (!isNaN(parseFloat(value)) || value === '.') {
            if (expression === '0' && value !== '.') {
                expression = value;
            } else {
                expression += value;
            }
            updateDisplay();
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperatorInput(value);
        } else if (value === 'AC') {
            resetCalculator();
        } else if (value === '+/-') {
            expression = (parseFloat(expression) * -1).toString();
            updateDisplay();
        } else if (value === '%') {
            handlePercentage(); // Call the handlePercentage function
        } else if (value === '=') {
            calculateResult();
        }
    });
});

// Initialize display
updateDisplay();
