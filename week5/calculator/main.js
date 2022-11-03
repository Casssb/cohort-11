/* DOM nodes */
//DOM nodes
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#back');
const entryScreen = document.querySelector('#screen');

/* Global variables */
let firstOperand = '';
let secondOperand = '';
let operation = null;

const appendNumberToScreen = (num) => {
  if (num === '.' && entryScreen.textContent.includes('.')) return;
  entryScreen.textContent = firstOperand;
  entryScreen.textContent += num;
  firstOperand = entryScreen.textContent;
};

const prepareOperation = (operator) => {
  if (entryScreen.textContent === '') return;
  if (operation !== null) detectCheek();
  secondOperand = firstOperand;
  operation = operator;
  firstOperand = '';
};

const detectCheek = () => {
  if (operation === '÷' && firstOperand === '0') {
    entryScreen.textContent = `${secondOperand} ${operation} ${firstOperand} = 🖕`;
    currentOperand = '';
    return;
  }
  calculate();
};

const calculate = () => {
  let result = null;
  const current = Number(firstOperand);
  const previous = Number(secondOperand);
  switch (operation) {
    case '÷':
      result = previous / current;
      break;
    case '*':
      result = previous * current;
      break;
    case '-':
      result = previous - current;
      break;
    case '+':
      result = previous + current;
      break;
    default:
      return;
  }
  result = Math.round((result + Number.EPSILON) * 100) / 100;
  firstOperand = result.toString();
  entryScreen.textContent = firstOperand;
  operation = null;
};

const clear = () => {
  firstOperand = '';
  secondOperand = '';
  operation = null;
  entryScreen.textContent = '';
};

const back = () => {
  entryScreen.textContent = entryScreen.textContent.slice(0, -1);
  firstOperand = firstOperand.slice(0, -1);
};

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumberToScreen(button.textContent);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    prepareOperation(button.textContent);
  });
});

equalsButton.addEventListener('click', detectCheek)
clearButton.addEventListener('click', clear);
backButton.addEventListener('click', back);
