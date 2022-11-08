/* DOM nodes */
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#back');
const entryScreen = document.querySelector('#screen');

/* Global variables. Operands are stored as string */
let firstOperand = '';
let secondOperand = '';
let operation = null;

/* adds the chosen number to the screen and store it as firstOperand
variable. If a dot has been entered and you try to enter another it 
will return */
const appendNumberToScreen = (num) => {
  if (num === '.' && entryScreen.textContent.includes('.')) return;
  entryScreen.textContent = firstOperand;
  entryScreen.textContent += num;
  firstOperand = entryScreen.textContent;
};

/* If the screen is empty (no numbers chosen)  it will prevent you selecting
an operation. Else if will store the number on the screen in secondOperand, store
the operation and empty the firstOperand. If there is already an operator stored
it will go straight to calculate (to allow chaining operations)*/
const prepareOperation = (operator) => {
  if (entryScreen.textContent === '') return;
  if (operation !== null) detectCheek();
  secondOperand = firstOperand;
  operation = operator;
  firstOperand = '';
};

/*If you try to divide by 0  */
const detectCheek = () => {
  if (operation === '÷' && firstOperand === '0') {
    entryScreen.textContent = `${secondOperand} ${operation} ${firstOperand} = 🖕`;
    currentOperand = '';
    return;
  }
  calculate();
};

/* The actual calculator part. Calculates the result of the 2 stored string
variables (after converting them to a number). Then append the number to the screen
after converting it back to a string. Will then reset the operator and leave the result
as the first operand for continued calculations*/
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

/* Logic to clear all stored data */
const clear = () => {
  firstOperand = '';
  secondOperand = '';
  operation = null;
  entryScreen.textContent = '';
};

/* Deletes single string element*/
const back = () => {
  entryScreen.textContent = entryScreen.textContent.slice(0, -1);
  firstOperand = firstOperand.slice(0, -1);
};

/* Keyboard entry logic */
const keyboardEntry = (e) => {
  if ((e.key >= 0 && e.key <= 9) || e.key === '.') appendNumberToScreen(e.key);
  if (e.key === '/') prepareOperation('÷');
  if (['*', '-', '+'].includes(e.key)) prepareOperation(e.key);
  if (e.key === '=' || e.key === 'Enter') detectCheek();
  if (e.key === 'Escape') clear();
  if (e.key === 'Backspace') back();
};

/* Event listeners */
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

equalsButton.addEventListener('click', detectCheek);
clearButton.addEventListener('click', clear);
backButton.addEventListener('click', back);
window.addEventListener('keydown', () => keyboardEntry(event));
